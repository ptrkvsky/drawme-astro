import gsap from 'gsap';

export function animateAngle() {
  const angles: NodeListOf<HTMLDivElement> | null =
    document.querySelectorAll('.angle');

  if (!angles) return;

  const tlAngle = gsap.timeline();

  tlAngle
    .from(angles, {
      opacity: 0,
      duration: 3,
      stagger: 1,
      ease: 'linear',
    })
    .call(() => {
      const angleAnimationCompleteEvent = new Event('angleAnimationComplete');

      document.dispatchEvent(angleAnimationCompleteEvent);
    });
}
