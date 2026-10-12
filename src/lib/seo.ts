export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const sliced = text.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(" ");
  const clean = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced;
  return clean.trim() + "...";
}