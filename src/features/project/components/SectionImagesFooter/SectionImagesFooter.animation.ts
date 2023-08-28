import config from 'src/config';
import gsap from 'gsap';

export function animateSectionImagesFooter() {
  const section: HTMLElement | null = document.querySelector(
    '#section-images-footer'
  );

  const images: NodeListOf<HTMLImageElement> =
    document.querySelectorAll('.image-footer');

  if (!section) return;

  const tlImagesFooter = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      endTrigger: 'footer',
      markers: config.mode === 'development',
      start: 'top 75%',
    },
  });

  tlImagesFooter.from(images, {
    opacity: 0,
    x: -20,
    duration: 1,
    stagger: 0.1,
  });
}
