export function getCanvaStyle() {
  const root = document.querySelector(':root');

  const cssStyle = getComputedStyle(root);

  const hue = +cssStyle.getPropertyValue('--canva-hue');
  const saturation = +cssStyle.getPropertyValue('--canva-saturation');
  const background = +cssStyle.getPropertyValue('--canva-background');

  return { hue, saturation, background };
}
