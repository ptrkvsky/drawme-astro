export function getRandomEntryFromArray<T>(array: T[]): T | null {
  // Check if the array is empty or null
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  // Generate a random index between 0 and the array length - 1
  const randomIndex = Math.floor(Math.random() * array.length);

  // Return the element corresponding to the random index
  return array[randomIndex];
}
