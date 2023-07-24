/**
 * Sets the hue and saturation CSS variables to adjust the color of a canvas. Default is the color of the brand
 *
 * @param {string} [hue=2.15] - The hue value to set. Should be a number between 0 and 360.
 * @param {string} [saturation=2.875] - The saturation value to set. Should be a number between 0 and 1.
 * @returns {void}
 */

export function setCanvaStyle(
  hue = '2.23',
  saturation = '2.875',
  background = '#FFF'
) {
  const root: HTMLElement = document.querySelector(':root');
  root.style.setProperty('--canva-hue', hue);
  root.style.setProperty('--canva-saturation', saturation);
  root.style.setProperty('--canva-background', background);
}
