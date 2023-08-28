import gsap from 'gsap';

export function revealTypographie() {
  const typographieElement: HTMLDivElement =
    document.querySelector('.typographie');
  if (!typographieElement) return;

  gsap.set(typographieElement, {
    opacity: 0,
  });

  document.addEventListener('revealColorsAnimationComplete', () => {
    const tlRevealColors = gsap.timeline(); // New timeline for the second animation

    tlRevealColors.fromTo(
      typographieElement,
      {
        opacity: 0,
        x: -10,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
          const animationCompleteEvent = new Event(
            'revealTypographieAnimationComplete'
          );
          document.dispatchEvent(animationCompleteEvent);
        },
      }
    );
  });
}
