import gsap from 'gsap';
import _SplitText, { SplitText } from 'gsap/SplitText';

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
  trigger: string,
  delay = 0,
  duration = 1
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
      duration,
      delay,
    });
}

export interface ParamsSplitAndReveal {
  element: string;
  typeSplit: TypeSplit;
  trigger: string;
  delay?: number;
  duration?: number;
}

/**
 * @description don't forget to add the class split-text on the element
 * @param param0
 */
export function splitAndReveal({
  element,
  typeSplit,
  trigger,
  delay = 0,
  duration = 1,
}: ParamsSplitAndReveal) {
  const splitedText = splitText(element, typeSplit);
  revealSplitedTitle(splitedText, typeSplit, trigger, delay, duration);
}

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
