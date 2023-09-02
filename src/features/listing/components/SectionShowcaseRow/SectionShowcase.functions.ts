/**
 * Extracts the year from a given date string.
 *
 * @param date - The date string to extract the year from (in ISO 8601 format).
 * @returns The extracted year as a number.
 */
export function extractYear(date: string): number {
  const myDate: Date = new Date(date);
  const year = myDate.getFullYear();
  return year;
}
