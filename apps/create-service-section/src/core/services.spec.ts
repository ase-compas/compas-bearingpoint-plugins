import { describe, it, expect } from 'vitest';
import {
  getIeds,
  getIedName,
  getExistingServices,
  createDefaultServicesFormState,
  parseServicesFormState,
  buildServicesElement,
  newEditEventV2,
} from '../core/services';

const SCD_XML = `<?xml version="1.0" encoding="UTF-8"?>
<SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL">
  <Header id="Project" version="1" revision="1" toolID="Test"/>
  <IED name="IED2" type="Type2" manufacturer="Acme"></IED>
  <IED name="IED1" type="Type1" manufacturer="Acme">
    <Services nameLength="32">
      <ClientServices goose="false" maxAttributes="99">
        <TimeSyncProt sntp="false"/>
      </ClientServices>
      <GetDirectory/>
    </Services>
  </IED>
</SCL>`;

function parseScd(): XMLDocument {
  return new DOMParser().parseFromString(SCD_XML, 'application/xml');
}

describe('getIeds', () => {
  it('returns an empty array when no document is given', () => {
    expect(getIeds(undefined)).toEqual([]);
  });

  it('returns all top level IED elements sorted by name', () => {
    const doc = parseScd();
    const ieds = getIeds(doc);
    expect(ieds.map(getIedName)).toEqual(['IED1', 'IED2']);
  });
});

describe('getExistingServices', () => {
  it('returns null when the IED has no Services section', () => {
    const doc = parseScd();
    const ied2 = getIeds(doc).find(ied => getIedName(ied) === 'IED2')!;
    expect(getExistingServices(ied2)).toBeNull();
  });

  it('returns the Services element directly below the IED', () => {
    const doc = parseScd();
    const ied1 = getIeds(doc).find(ied => getIedName(ied) === 'IED1')!;
    expect(getExistingServices(ied1)?.getAttribute('nameLength')).toBe('32');
  });
});

describe('parseServicesFormState', () => {
  it('returns all-enabled defaults when there is no existing Services element', () => {
    const formState = parseServicesFormState(null);
    expect(formState).toEqual(createDefaultServicesFormState());
  });

  it('enables only the sections present in the existing Services element, using their actual attribute values', () => {
    const doc = parseScd();
    const ied1 = getIeds(doc).find(ied => getIedName(ied) === 'IED1')!;
    const existingServices = getExistingServices(ied1)!;

    const formState = parseServicesFormState(existingServices);

    expect(formState['GetDirectory'].enabled).toBe(true);
    expect(formState['DynAssociation'].enabled).toBe(false);

    const clientServices = formState['ClientServices'];
    expect(clientServices.enabled).toBe(true);
    expect(clientServices.values['goose']).toBe('false');
    expect(clientServices.values['maxAttributes']).toBe('99');
    // Attributes absent on the existing element fall back to the field default.
    expect(clientServices.values['sv']).toBe('true');

    expect(clientServices.children['TimeSyncProt'].enabled).toBe(true);
    expect(clientServices.children['TimeSyncProt'].values['sntp']).toBe('false');
  });

  it('disables nested children absent from an otherwise present parent section', () => {
    const noTimeSyncXml = `<?xml version="1.0" encoding="UTF-8"?>
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <IED name="IED3">
          <Services><ClientServices goose="true"/></Services>
        </IED>
      </SCL>`;
    const noTimeSyncDoc = new DOMParser().parseFromString(noTimeSyncXml, 'application/xml');
    const ied3 = getIeds(noTimeSyncDoc)[0];
    const existingServices = getExistingServices(ied3)!;

    const formState = parseServicesFormState(existingServices);
    expect(formState['ClientServices'].enabled).toBe(true);
    expect(formState['ClientServices'].children['TimeSyncProt'].enabled).toBe(false);
  });
});

describe('buildServicesElement', () => {
  it('only includes enabled sections and their attributes', () => {
    const doc = parseScd();
    const formState = createDefaultServicesFormState();
    formState['DynAssociation'].enabled = false;

    const services = buildServicesElement(doc, '64', formState);

    expect(services.tagName).toBe('Services');
    expect(services.getAttribute('nameLength')).toBe('64');
    expect(services.querySelector('DynAssociation')).toBeNull();
    expect(services.querySelector('GetDirectory')).not.toBeNull();

    const clientServices = services.querySelector('ClientServices')!;
    expect(clientServices.getAttribute('goose')).toBe('true');
    expect(clientServices.querySelector('TimeSyncProt')).not.toBeNull();
  });

  it('omits the nameLength attribute when left empty', () => {
    const doc = parseScd();
    const formState = createDefaultServicesFormState();
    const services = buildServicesElement(doc, '', formState);
    expect(services.hasAttribute('nameLength')).toBe(false);
  });

  it('excludes disabled nested children', () => {
    const doc = parseScd();
    const formState = createDefaultServicesFormState();
    formState['ClientServices'].children['TimeSyncProt'].enabled = false;

    const services = buildServicesElement(doc, '64', formState);
    expect(services.querySelector('ClientServices > TimeSyncProt')).toBeNull();
  });
});

describe('newEditEventV2', () => {
  it('builds an oscd-edit-v2 CustomEvent carrying the edit and options', () => {
    const doc = parseScd();
    const parent = doc.documentElement;
    const node = doc.createElement('Services');

    const event = newEditEventV2({ parent, node, reference: null }, { title: 'Create Service Section' });

    expect(event.type).toBe('oscd-edit-v2');
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail.title).toBe('Create Service Section');
    expect(event.detail.edit).toEqual({ parent, node, reference: null });
  });
});
