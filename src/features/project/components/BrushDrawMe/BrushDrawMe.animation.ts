import gsap from 'gsap';

export function animateBrush() {
  const tlBrush = gsap.timeline();

  tlBrush
    .fromTo(
      '#reveal-brush',
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
    })
    .call(
      () => {
        const animationCompleteEvent = new Event('brushAnimationComplete');
        document.dispatchEvent(animationCompleteEvent);
      },
      [],
      1.5
    );
}
