import config from "src/config";

/**
 * Calculates the delay for displaying the preloader.
 *
 * The delay is determined based on the environment and whether the preloader
 * has been seen before.
 *
 * @returns {number} The delay value in seconds.
 */
export function getPreloaderDelay(): number {
  // Duration of preloader
  const isPreloaderSeen = sessionStorage.getItem("isPreloaderSeen");
  const envDelay = config.mode === "development" ? 1.5 : 8.5;
  const delay = isPreloaderSeen ? 0 : envDelay;
  return delay;
}
