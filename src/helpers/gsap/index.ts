import gsap from 'gsap';
import _SplitText from 'gsap/SplitText';
import { SplitText } from 'gsap/SplitText';

import config from 'src/config';

type TypeSplit = 'chars' | 'words' | 'lines';

export function splitText(element: string, type: TypeSplit) {
  new SplitText(element, {
    type,
  });
  const child = `${element} > div`;

  const splited = new SplitText(child, {
    type,
  });
  return splited;
}

export function revealSplitedTitle(
  splitedTitle: _SplitText,
  type: TypeSplit,
  trigger: string
) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger,
        endTrigger: 'footer',
        markers: config.mode === 'development',
        start: 'top 85%',
      },
    })
    .from(splitedTitle[type], {
      y: 50,
      ease: 'power1.out',
      skewY: 5,
      stagger: {
        amount: 0.3,
      },
      opacity: 0,
    });
}

export interface ParamsSplitAndReveal {
  element: string;
  typeSplit: TypeSplit;
  trigger: string;
}

/**
 * @description don't forget to add the class split-text on the element
 * @param param0
 */
export function splitAndReveal({ element, typeSplit, trigger }: any) {
  const splitedText = splitText(element, typeSplit);
  revealSplitedTitle(splitedText, typeSplit, trigger);
}

function mergeArrays<T extends unknown[], U extends unknown[]>(
  arr1: T,
  arr2: U
) {
  return [...arr1, ...arr2];
}

const tab1 = [1, 2, 3];
const tab2 = ['1', '2', '3'];

const result = mergeArrays(tab1, tab2);

/**
 * @desc Apply GSAP lag to a SplitText object
 * @param splitText
 * @param smoothScrollContext
 */
export const setLag = (
  splitText: _SplitText,
  smoothScrollContext: ScrollSmoother | undefined
) => {
  setTimeout(() => {
    if (splitText && smoothScrollContext) {
      splitText.lines.forEach((line, i) => {
        smoothScrollContext.effects(line, { speed: 1, lag: (i + 1) * 0.05 });
      });
    }
  }, 100);
};
