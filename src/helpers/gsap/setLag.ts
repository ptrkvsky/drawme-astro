import _SplitText from 'gsap/SplitText';

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
