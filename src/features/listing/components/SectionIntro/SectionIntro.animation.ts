import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ParamsSplitAndReveal, splitAndReveal } from '@helpers/gsap';

export function revealText(element: string) {
  const paramsSplitAndRevealSubtitleWebsite: ParamsSplitAndReveal = {
    element,
    typeSplit: 'chars',
    trigger: '.section__title',
    delay: 0.5,
    duration: 0.75,
  };

  splitAndReveal(paramsSplitAndRevealSubtitleWebsite);
}

export function revealParagraph() {
  // Select the paragraph element
  const paragraph = document.querySelectorAll('.reveal-paragraph');

  // Initialize the SplitText instance
  const splitText = new SplitText(paragraph, { type: 'lines' });

  // Hide the lines initially
  gsap.set(splitText.lines, { opacity: 0, y: 10 });

  // Create an animation timeline
  const revealTimeline = gsap.timeline();

  // Iterate over the lines and create animations
  splitText.lines.forEach((line, index) => {
    // Animation for each line
    revealTimeline.to(line, {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 0.4,
      ease: 'power1.in',
    });
  });

  revealTimeline.from('.guillemets-image', {
    opacity: 0,
    y: -100,
    duration: 0.75,
    ease: 'power4.out',
  });

  // You can trigger the animation whenever you want
  revealTimeline.delay(1.5).play();
}
