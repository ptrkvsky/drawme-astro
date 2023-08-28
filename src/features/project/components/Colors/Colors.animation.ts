import gsap from 'gsap';

export function revealColors() {
  const colorsElement: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.color-item');
  if (!colorsElement) return;

  gsap.set(colorsElement, {
    opacity: 0,
  });

  document.addEventListener('presentationClientAnimationComplete', () => {
    const tlRevealColors = gsap.timeline(); // New timeline for the second animation

    tlRevealColors.fromTo(
      colorsElement,
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
            'revealColorsAnimationComplete'
          );
          document.dispatchEvent(animationCompleteEvent);
        },
      }
    );
  });
}
