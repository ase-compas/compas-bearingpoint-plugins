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
 * Removes existing whitespace-only text nodes from an element's children.
 * This avoids compounding indentation when re-formatting a node whose
 * subtree is already (partially) indented, e.g. because it was cloned from
 * a document containing some formatting whitespace.
 */
function stripWhitespaceOnlyTextNodes(element: Element): void {
  Array.from(element.childNodes).forEach(child => {
    if (child.nodeType === Node.TEXT_NODE && !child.textContent?.trim()) {
      element.removeChild(child);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      stripWhitespaceOnlyTextNodes(child as Element);
    }
  });
}

/**
 * Recursively indents an element's subtree in place by inserting newline
 * and indentation text nodes between element children. Elements that only
 * contain text (e.g. `<P>value</P>`) are left untouched so their content
 * isn't altered.
 */
function indentElement(element: Element, doc: Document, depth: number): void {
  const hasElementChildren = Array.from(element.childNodes).some(
    child => child.nodeType === Node.ELEMENT_NODE
  );
  if (!hasElementChildren) return;

  const childIndent = '\n' + '  '.repeat(depth + 1);
  Array.from(element.childNodes).forEach(child => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      element.insertBefore(doc.createTextNode(childIndent), child);
      indentElement(child as Element, doc, depth + 1);
    }
  });
  element.appendChild(doc.createTextNode('\n' + '  '.repeat(depth)));
}

/**
 * Serialize an XMLDocument to a formatted (pretty printed) XML string.
 *
 * Elements cloned from the source document may carry no (or inconsistent)
 * formatting whitespace, which would otherwise cause elements to be printed
 * all on a single line (e.g. `</Header><IED ...>` or
 * `<DataTypeTemplates><LNodeType ...>`). This re-indents the whole subtree
 * before serializing.
 */
export function serializeXmlDocument(doc: XMLDocument): string {
  stripWhitespaceOnlyTextNodes(doc.documentElement);
  indentElement(doc.documentElement, doc, 0);
  return new XMLSerializer().serializeToString(doc);
}
