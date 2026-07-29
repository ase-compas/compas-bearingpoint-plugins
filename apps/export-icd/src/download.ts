/**
 * Download helper: triggers a browser file download for the given text
 * content by creating a temporary anchor element.
 */
export function downloadTextFile(
  content: string,
  filename: string,
  mimeType: string
): void {
  const blob = new Blob([content], { type: mimeType });

  const anchor = document.createElement('a');
  anchor.download = filename;
  anchor.href = URL.createObjectURL(blob);
  anchor.dataset.downloadurl = [mimeType, anchor.download, anchor.href].join(
    ':'
  );
  anchor.style.display = 'none';

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  setTimeout(() => URL.revokeObjectURL(anchor.href), 5000);
}
