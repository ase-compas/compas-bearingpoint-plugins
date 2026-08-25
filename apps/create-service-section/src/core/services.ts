/**
 * Framework-agnostic helpers to build a `Services` section (SCL
 * `ConfServices`) for an `IED` and insert it via the Edit Event API v2.
 */

const SCL_NAMESPACE = 'http://www.iec.ch/61850/2003/SCL';

export type FieldType = 'boolean' | 'number' | 'select';

export interface FieldDef {
  /** SCL attribute name. */
  name: string;
  /** Human readable label shown in the form. */
  label: string;
  type: FieldType;
  /** Only used for `type: 'select'`. */
  options?: string[];
  /** Default value applied when the section is first enabled. */
  default?: string;
}

export interface SectionDef {
  /** SCL element tag name, e.g. `ClientServices`. */
  tag: string;
  label: string;
  fields: FieldDef[];
  /** Nested sub-elements, e.g. `TimeSyncProt` inside `ClientServices`. */
  children?: SectionDef[];
}

/**
 * Definition of every `Services` child element supported by this plugin, in
 * the order required by the SCL schema (`ConfServices` complex type).
 */
export const SERVICES_SECTIONS: SectionDef[] = [
  {
    tag: 'ClientServices',
    label: 'Client Services',
    fields: [
      { name: 'goose', label: 'GOOSE', type: 'boolean', default: 'true' },
      { name: 'gsse', label: 'GSSE', type: 'boolean', default: 'false' },
      { name: 'bufReport', label: 'Buffered Report', type: 'boolean', default: 'true' },
      { name: 'unbufReport', label: 'Unbuffered Report', type: 'boolean', default: 'true' },
      { name: 'readLog', label: 'Read Log', type: 'boolean', default: 'false' },
      { name: 'sv', label: 'Sampled Values', type: 'boolean', default: 'true' },
      { name: 'supportsLdName', label: 'Supports LD Name', type: 'boolean', default: 'true' },
      { name: 'maxAttributes', label: 'Max Attributes', type: 'number', default: '250' },
      { name: 'maxReports', label: 'Max Reports', type: 'number', default: '32' },
      { name: 'maxGOOSE', label: 'Max GOOSE', type: 'number', default: '32' },
      { name: 'maxSMV', label: 'Max SMV', type: 'number', default: '32' },
      { name: 'rGOOSE', label: 'Routable GOOSE', type: 'boolean', default: 'false' },
      { name: 'rSV', label: 'Routable SMV', type: 'boolean', default: 'false' },
      { name: 'noIctBinding', label: 'No ICT Binding', type: 'boolean', default: 'false' },
    ],
    children: [
      {
        tag: 'TimeSyncProt',
        label: 'Time Sync Protocol',
        fields: [
          { name: 'sntp', label: 'SNTP', type: 'boolean', default: 'true' },
          { name: 'iec61850_9_3', label: 'IEC 61850-9-3', type: 'boolean', default: 'false' },
          { name: 'c37_238', label: 'C37.238', type: 'boolean', default: 'false' },
          { name: 'other', label: 'Other', type: 'boolean', default: 'false' },
        ],
      },
    ],
  },
  {
    tag: 'DynAssociation',
    label: 'Dynamic Association',
    fields: [{ name: 'max', label: 'Max', type: 'number', default: '6' }],
  },
  {
    tag: 'SettingGroups',
    label: 'Setting Groups',
    fields: [],
    children: [
      {
        tag: 'SGEdit',
        label: 'Setting Group Edit',
        fields: [{ name: 'resvTms', label: 'Reserve Time Ms', type: 'boolean', default: 'true' }],
      },
      {
        tag: 'ConfSG',
        label: 'Configure Setting Group',
        fields: [{ name: 'resvTms', label: 'Reserve Time Ms', type: 'boolean', default: 'true' }],
      },
    ],
  },
  { tag: 'GetDirectory', label: 'Get Directory', fields: [] },
  { tag: 'GetDataObjectDefinition', label: 'Get Data Object Definition', fields: [] },
  { tag: 'DataObjectDirectory', label: 'Data Object Directory', fields: [] },
  { tag: 'GetDataSetValue', label: 'Get Data Set Value', fields: [] },
  { tag: 'SetDataSetValue', label: 'Set Data Set Value', fields: [] },
  { tag: 'DataSetDirectory', label: 'Data Set Directory', fields: [] },
  {
    tag: 'ConfDataSet',
    label: 'Configure Data Set',
    fields: [
      { name: 'max', label: 'Max', type: 'number', default: '50' },
      { name: 'maxAttributes', label: 'Max Attributes', type: 'number', default: '200' },
      { name: 'modify', label: 'Modify', type: 'boolean', default: 'true' },
    ],
  },
  {
    tag: 'DynDataSet',
    label: 'Dynamic Data Set',
    fields: [
      { name: 'max', label: 'Max', type: 'number', default: '30' },
      { name: 'maxAttributes', label: 'Max Attributes', type: 'number', default: '60' },
    ],
  },
  { tag: 'ReadWrite', label: 'Read/Write', fields: [] },
  { tag: 'TimerActivatedControl', label: 'Timer Activated Control', fields: [] },
  {
    tag: 'ConfReportControl',
    label: 'Configure Report Control',
    fields: [
      { name: 'max', label: 'Max', type: 'number', default: '60' },
      {
        name: 'bufMode',
        label: 'Buffer Mode',
        type: 'select',
        options: ['buffered', 'unbuffered', 'both'],
        default: 'both',
      },
      { name: 'bufConf', label: 'Buffer Configurable', type: 'boolean', default: 'false' },
      { name: 'maxBuf', label: 'Max Buffer', type: 'number', default: '' },
    ],
  },
  { tag: 'GetCBValues', label: 'Get Control Block Values', fields: [] },
  {
    tag: 'ConfLogControl',
    label: 'Configure Log Control',
    fields: [{ name: 'max', label: 'Max', type: 'number', default: '10' }],
  },
  {
    tag: 'ReportSettings',
    label: 'Report Settings',
    fields: [
      { name: 'cbName', label: 'CB Name', type: 'select', options: ['Fix', 'Conf'], default: 'Conf' },
      { name: 'datSet', label: 'Data Set', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Dyn' },
      { name: 'rptID', label: 'Report ID', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Dyn' },
      { name: 'optFields', label: 'Optional Fields', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Dyn' },
      { name: 'bufTime', label: 'Buffer Time', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Dyn' },
      { name: 'trgOps', label: 'Trigger Options', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Dyn' },
      { name: 'intgPd', label: 'Integrity Period', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Dyn' },
      { name: 'resvTms', label: 'Reserve Time Ms', type: 'boolean', default: 'false' },
      { name: 'owner', label: 'Owner', type: 'boolean', default: 'false' },
    ],
  },
  {
    tag: 'LogSettings',
    label: 'Log Settings',
    fields: [
      { name: 'cbName', label: 'CB Name', type: 'select', options: ['Fix', 'Conf'], default: 'Fix' },
      { name: 'datSet', label: 'Data Set', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'logEna', label: 'Log Enabled', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'trgOps', label: 'Trigger Options', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'intgPd', label: 'Integrity Period', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
    ],
  },
  {
    tag: 'GSESettings',
    label: 'GSE Settings',
    fields: [
      { name: 'cbName', label: 'CB Name', type: 'select', options: ['Fix', 'Conf'], default: 'Conf' },
      { name: 'datSet', label: 'Data Set', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Conf' },
      { name: 'appID', label: 'App ID', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'dataLabel', label: 'Data Label', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'kdaParticipant', label: 'KDA Participant', type: 'boolean', default: 'false' },
    ],
  },
  {
    tag: 'SMVSettings',
    label: 'SMV Settings',
    fields: [
      { name: 'cbName', label: 'CB Name', type: 'select', options: ['Fix', 'Conf'], default: 'Fix' },
      { name: 'datSet', label: 'Data Set', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'svID', label: 'SMV ID', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'optFields', label: 'Optional Fields', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'smpRate', label: 'Sample Rate', type: 'select', options: ['Fix', 'Dyn', 'Conf'], default: 'Fix' },
      { name: 'samplesPerSec', label: 'Samples Per Sec', type: 'boolean', default: 'false' },
      { name: 'pdcTimeStamp', label: 'PDC Time Stamp', type: 'boolean', default: 'false' },
      { name: 'synchSrcId', label: 'Sync Source Id', type: 'boolean', default: 'false' },
      { name: 'nofASDU', label: 'Number of ASDU', type: 'select', options: ['Fix', 'Conf'], default: 'Fix' },
      { name: 'kdaParticipant', label: 'KDA Participant', type: 'boolean', default: 'false' },
    ],
  },
  { tag: 'GSEDir', label: 'GSE Directory', fields: [] },
  {
    tag: 'GOOSE',
    label: 'GOOSE',
    fields: [
      { name: 'max', label: 'Max', type: 'number', default: '16' },
      { name: 'fixedOffs', label: 'Fixed Offsets', type: 'boolean', default: 'false' },
      { name: 'goose', label: 'GOOSE', type: 'boolean', default: 'true' },
      { name: 'rGOOSE', label: 'Routable GOOSE', type: 'boolean', default: 'false' },
    ],
  },
  {
    tag: 'GSSE',
    label: 'GSSE',
    fields: [{ name: 'max', label: 'Max', type: 'number', default: '8' }],
  },
  {
    tag: 'SMVsc',
    label: 'Sampled Measured Values',
    fields: [
      { name: 'max', label: 'Max', type: 'number', default: '12' },
      {
        name: 'delivery',
        label: 'Delivery',
        type: 'select',
        options: ['multicast', 'unicast', 'both'],
        default: 'multicast',
      },
      { name: 'deliveryConf', label: 'Delivery Configurable', type: 'boolean', default: 'false' },
      { name: 'sv', label: 'Sampled Values', type: 'boolean', default: 'true' },
      { name: 'rSV', label: 'Routable SMV', type: 'boolean', default: 'false' },
    ],
  },
  {
    tag: 'FileHandling',
    label: 'File Handling',
    fields: [
      { name: 'mms', label: 'MMS', type: 'boolean', default: 'true' },
      { name: 'ftp', label: 'FTP', type: 'boolean', default: 'false' },
      { name: 'ftps', label: 'FTPS', type: 'boolean', default: 'false' },
    ],
  },
  {
    tag: 'ConfLNs',
    label: 'Configure Logical Nodes',
    fields: [
      { name: 'fixPrefix', label: 'Fix Prefix', type: 'boolean', default: 'false' },
      { name: 'fixLnInst', label: 'Fix LN Instance', type: 'boolean', default: 'false' },
    ],
  },
  { tag: 'ConfLdName', label: 'Configure Logical Device Name', fields: [] },
  {
    tag: 'SupSubscription',
    label: 'Supervision Subscription',
    fields: [
      { name: 'maxGo', label: 'Max GOOSE', type: 'number', default: '128' },
      { name: 'maxSv', label: 'Max SMV', type: 'number', default: '0' },
    ],
  },
  {
    tag: 'ConfSigRef',
    label: 'Configure Signal Reference',
    fields: [{ name: 'max', label: 'Max', type: 'number', default: '100' }],
  },
  {
    tag: 'ValueHandling',
    label: 'Value Handling',
    fields: [{ name: 'setToRO', label: 'Set To Read Only', type: 'boolean', default: 'false' }],
  },
  {
    tag: 'RedProt',
    label: 'Redundancy Protocol',
    fields: [
      { name: 'hsr', label: 'HSR', type: 'boolean', default: 'false' },
      { name: 'prp', label: 'PRP', type: 'boolean', default: 'false' },
      { name: 'rstp', label: 'RSTP', type: 'boolean', default: 'false' },
    ],
  },
  {
    tag: 'TimeSyncProt',
    label: 'Time Sync Protocol',
    fields: [
      { name: 'sntp', label: 'SNTP', type: 'boolean', default: 'true' },
      { name: 'iec61850_9_3', label: 'IEC 61850-9-3', type: 'boolean', default: 'false' },
      { name: 'c37_238', label: 'C37.238', type: 'boolean', default: 'false' },
      { name: 'other', label: 'Other', type: 'boolean', default: 'false' },
    ],
  },
  {
    tag: 'CommProt',
    label: 'Communication Protocol',
    fields: [{ name: 'ipv6', label: 'IPv6', type: 'boolean', default: 'false' }],
  },
];

/** Reactive-friendly state for a single section (and its nested children). */
export interface SectionState {
  enabled: boolean;
  values: Record<string, string>;
  children: Record<string, SectionState>;
}

function createSectionState(section: SectionDef, enabled: boolean): SectionState {
  const values: Record<string, string> = {};
  section.fields.forEach(field => {
    values[field.name] = field.default ?? '';
  });

  const children: Record<string, SectionState> = {};
  (section.children ?? []).forEach(child => {
    children[child.tag] = createSectionState(child, enabled);
  });

  return { enabled, values, children };
}

/** Builds the initial form state, every top-level section enabled by default. */
export function createDefaultServicesFormState(): Record<string, SectionState> {
  const state: Record<string, SectionState> = {};
  SERVICES_SECTIONS.forEach(section => {
    state[section.tag] = createSectionState(section, true);
  });
  return state;
}

function parseSectionState(section: SectionDef, element: Element | null): SectionState {
  const values: Record<string, string> = {};
  section.fields.forEach(field => {
    values[field.name] = element?.getAttribute(field.name) ?? field.default ?? '';
  });

  const children: Record<string, SectionState> = {};
  (section.children ?? []).forEach(child => {
    const childElement = element?.querySelector(`:scope > ${child.tag}`) ?? null;
    children[child.tag] = parseSectionState(child, childElement);
  });

  return { enabled: element !== null, values, children };
}

/**
 * Builds the form state from an existing `Services` element so its current
 * configuration can be reviewed/edited. Sections not present start
 * unchecked but keep default values. Falls back to
 * [[`createDefaultServicesFormState`]] when `existingServices` is `null`.
 */
export function parseServicesFormState(
  existingServices: Element | null
): Record<string, SectionState> {
  if (!existingServices) return createDefaultServicesFormState();

  const state: Record<string, SectionState> = {};
  SERVICES_SECTIONS.forEach(section => {
    const element = existingServices.querySelector(`:scope > ${section.tag}`);
    state[section.tag] = parseSectionState(section, element);
  });
  return state;
}

function buildSectionElement(
  doc: XMLDocument,
  section: SectionDef,
  state: SectionState
): Element {
  const element = doc.createElementNS(SCL_NAMESPACE, section.tag);
  section.fields.forEach(field => {
    const value = state.values[field.name];
    if (value !== '' && value !== undefined) element.setAttribute(field.name, value);
  });

  (section.children ?? []).forEach(child => {
    const childState = state.children[child.tag];
    if (childState?.enabled) element.appendChild(buildSectionElement(doc, child, childState));
  });

  return element;
}

/**
 * Builds a new `Services` element out of the given form state, containing
 * only the sections the user left enabled.
 *
 * @param doc        - The document the element will belong to (used to
 *                     create elements in the right namespace).
 * @param nameLength - Value for the `Services/@nameLength` attribute, or an
 *                     empty string to omit it.
 * @param formState  - The current state of the services form.
 */
export function buildServicesElement(
  doc: XMLDocument,
  nameLength: string,
  formState: Record<string, SectionState>
): Element {
  const services = doc.createElementNS(SCL_NAMESPACE, 'Services');
  if (nameLength !== '') services.setAttribute('nameLength', nameLength);

  SERVICES_SECTIONS.forEach(section => {
    const sectionState = formState[section.tag];
    if (sectionState?.enabled) services.appendChild(buildSectionElement(doc, section, sectionState));
  });

  return services;
}

/** Returns the name of the given IED element, or an empty string if missing. */
export function getIedName(ied: Element): string {
  return ied.getAttribute('name') ?? '';
}

/**
 * Returns all top level `IED` elements found in the given SCL document,
 * sorted alphabetically by their `name` attribute.
 */
export function getIeds(doc: XMLDocument | undefined): Element[] {
  if (!doc) return [];
  return Array.from(doc.querySelectorAll(':root > IED')).sort((a, b) =>
    getIedName(a).localeCompare(getIedName(b))
  );
}

/** Returns the `Services` element directly below the given `IED`, if any. */
export function getExistingServices(ied: Element): Element | null {
  return ied.querySelector(':scope > Services');
}

export type InsertV2 = {
  parent: Node;
  node: Node;
  reference: Node | null;
};

export type RemoveV2 = {
  node: Node;
};

export type EditV2 = InsertV2 | RemoveV2 | EditV2[];

export interface EditEventOptionsV2 {
  title?: string;
  squash?: boolean;
  createHistoryEntry?: boolean;
}

export type EditDetailV2<E extends EditV2 = EditV2> = EditEventOptionsV2 & {
  edit: E;
};

export type EditEventV2<E extends EditV2 = EditV2> = CustomEvent<EditDetailV2<E>>;

/**
 * Builds an `oscd-edit-v2` event, following OpenSCD's Edit Event API v2
 * (see https://github.com/com-pas/oscd-official-plugins/blob/main/docs/core-api/edit-api.md),
 * used to insert (or replace) elements in the currently opened project.
 */
export function newEditEventV2<E extends EditV2>(
  edit: E,
  options?: EditEventOptionsV2
): EditEventV2<E> {
  return new CustomEvent<EditDetailV2<E>>('oscd-edit-v2', {
    composed: true,
    bubbles: true,
    detail: { ...options, edit },
  });
}
