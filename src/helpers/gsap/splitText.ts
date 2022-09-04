import SplitText from 'gsap/SplitText';

export default function splitText(
  element: string,
  type: 'lines' | 'words' | 'chars'
) {
  new SplitText(element, {
    type,
  });
  const child = `${element} > div`;

  const splited = new SplitText(child, {
    type,
  });
  return splited;
}
