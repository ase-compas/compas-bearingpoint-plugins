/**
 * Pure, framework-agnostic helpers to build an ICD file (a valid SCL document
 * containing exactly one IED) out of the SCD project currently open in
 * OpenSCD/CompAS.
 */

const SCL_NAMESPACE = 'http://www.iec.ch/61850/2003/SCL';

/**
 * Returns the name of the given IED element, or an empty string if missing.
 */
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

function cloneAttributes(destElement: Element, sourceElement: Element): void {
  Array.from(sourceElement.attributes).forEach(attr =>
    destElement.setAttribute(attr.name, attr.value)
  );
}

/**
 * Build a new SCL/ICD XMLDocument containing:
 * - the same `Header` element as the source SCD document
 * - exactly the one IED element requested (identified by `iedName`)
 * - the complete `DataTypeTemplates` section of the source SCD document
 *
 * @param doc     - The currently opened SCD project.
 * @param iedName - The `name` attribute of the IED to export.
 * @returns the resulting ICD document, or `undefined` when no IED with the
 *          given name could be found.
 */
export function buildIcdDocument(
  doc: XMLDocument,
  iedName: string
): XMLDocument | undefined {
  const iedElement = getIeds(doc).find(ied => getIedName(ied) === iedName);
  if (!iedElement) return undefined;

  const icdDoc = new DOMParser().parseFromString(
    `<?xml version="1.0" encoding="UTF-8"?><SCL xmlns="${SCL_NAMESPACE}"></SCL>`,
    'application/xml'
  );

  // Keep the schema revision/release attributes of the original project.
  cloneAttributes(icdDoc.documentElement, doc.documentElement);

  // The ICD file has the same Header as the SCD file.
  const header = doc.querySelector(':root > Header');
  if (header) icdDoc.documentElement.appendChild(header.cloneNode(true));

  // Exactly one IED, the one the user selected.
  icdDoc.documentElement.appendChild(iedElement.cloneNode(true));

  // The complete DataTypeTemplates section.
  const dataTypeTemplates = doc.querySelector(':root > DataTypeTemplates');
  if (dataTypeTemplates)
    icdDoc.documentElement.appendChild(dataTypeTemplates.cloneNode(true));

  return icdDoc;
}

/**
 * Derive the filename for the ICD file to be downloaded, based on the
 * current project's filename and the exported IED's name.
 */
export function buildIcdFilename(docName: string, iedName: string): string {
  const baseName = (docName || 'project').replace(/\.[^./]+$/, '');
  return `${baseName}-${iedName}.icd`;
}

/**
 * Serialize an XMLDocument to a formatted (pretty printed) XML string.
 */
export function serializeXmlDocument(doc: XMLDocument): string {
  return new XMLSerializer().serializeToString(doc);
}
