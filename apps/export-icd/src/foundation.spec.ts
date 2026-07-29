import { describe, it, expect } from 'vitest';
import {
  getIeds,
  getIedName,
  buildIcdDocument,
  buildIcdFilename,
  serializeXmlDocument,
} from './foundation';

const SCD_XML = `<?xml version="1.0" encoding="UTF-8"?>
<SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL">
  <Header id="Project" version="1" revision="1" toolID="Test"/>
  <Substation name="S1"></Substation>
  <IED name="IED2" type="Type2" manufacturer="Acme"></IED>
  <IED name="IED1" type="Type1" manufacturer="Acme"></IED>
  <DataTypeTemplates>
    <LNodeType id="LLN0" lnClass="LLN0"></LNodeType>
  </DataTypeTemplates>
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

describe('buildIcdDocument', () => {
  it('returns undefined when the IED cannot be found', () => {
    const doc = parseScd();
    expect(buildIcdDocument(doc, 'DoesNotExist')).toBeUndefined();
  });

  it('contains exactly one IED, the Header and the full DataTypeTemplates section', () => {
    const doc = parseScd();
    const icdDoc = buildIcdDocument(doc, 'IED1')!;

    expect(icdDoc).toBeDefined();

    const ieds = icdDoc.querySelectorAll(':root > IED');
    expect(ieds.length).toBe(1);
    expect(ieds[0].getAttribute('name')).toBe('IED1');

    const header = icdDoc.querySelector(':root > Header');
    expect(header).not.toBeNull();
    expect(header?.getAttribute('id')).toBe('Project');

    const dataTypeTemplates = icdDoc.querySelector(':root > DataTypeTemplates');
    expect(dataTypeTemplates).not.toBeNull();
    expect(dataTypeTemplates?.querySelector('LNodeType')).not.toBeNull();

    // The Substation section must not be copied over.
    expect(icdDoc.querySelector(':root > Substation')).toBeNull();
  });

  it('keeps the schema revision/release and namespace of the source document', () => {
    const doc = parseScd();
    const icdDoc = buildIcdDocument(doc, 'IED1')!;

    expect(icdDoc.documentElement.getAttribute('version')).toBe('2007');
    expect(icdDoc.documentElement.getAttribute('revision')).toBe('B');
  });
});

describe('buildIcdFilename', () => {
  it('replaces the extension of the project name and appends the IED name', () => {
    expect(buildIcdFilename('MyProject.scd', 'IED1')).toBe('MyProject-IED1.icd');
  });

  it('falls back to a default name when no docName is given', () => {
    expect(buildIcdFilename('', 'IED1')).toBe('project-IED1.icd');
  });
});

describe('serializeXmlDocument', () => {
  it('serializes the document to a valid XML string', () => {
    const doc = parseScd();
    const icdDoc = buildIcdDocument(doc, 'IED1')!;
    const xml = serializeXmlDocument(icdDoc);

    expect(xml).toContain('<IED name="IED1"');
    expect(xml).toContain('<Header id="Project"');
  });
});
