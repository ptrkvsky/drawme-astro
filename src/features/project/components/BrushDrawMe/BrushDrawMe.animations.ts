import config from 'src/config';
import gsap from 'gsap';
import Swup from 'swup';

export function revealBrush() {
  const tlBrush = gsap.timeline();

  const brush = document.querySelector('#reveal-brush'); // eslint-disable-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/

  console.log('🏩 reveal brush');

  if (config.mode === 'development') {
    if (!brush) console.error('🔥 Brush not found');
    return;
  }

  tlBrush
    .fromTo(
      brush,
      {
        xPercent: 0,
      },
      {
        xPercent: 100,
        delay: 0.5,
        duration: 1.5,
        ease: 'power4.inOut',
      }
    )
    .to('#reveal-brush', {
      autoAlpha: 0,
      duration: 0,
    });
}

export function handleRevealBrush(
  event: CustomEvent<{
    message: string;
    swup: Swup;
  }>
) {
  const { swup } = event.detail;

  swup.on('animationInDone', () => {
    revealBrush();
  });
}
