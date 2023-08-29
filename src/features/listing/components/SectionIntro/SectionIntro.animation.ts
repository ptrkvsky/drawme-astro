import { ParamsSplitAndReveal, splitAndReveal } from '@helpers/gsap';

export function revealTitle() {
  const paramsSplitAndRevealSubtitleWebsite: ParamsSplitAndReveal = {
    element: '.reveal-title',
    typeSplit: 'chars',
    trigger: '.section__title',
    delay: 0.5,
    duration: 0.75,
  };

  splitAndReveal(paramsSplitAndRevealSubtitleWebsite);
}
