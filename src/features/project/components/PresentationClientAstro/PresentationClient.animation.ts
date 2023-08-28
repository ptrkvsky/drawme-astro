import gsap from 'gsap';

export function revealWrapper() {
  const presentationElement: HTMLDivElement = document.querySelector(
    '#presentation-client'
  );
  if (!presentationElement) return;

  gsap.set(presentationElement, {
    opacity: 0,
  });

  document.addEventListener('mainImagesAnimationComplete', () => {
    const tlRevealWrapper = gsap.timeline(); // New timeline for the second animation

    tlRevealWrapper
      .fromTo(
        presentationElement,
        {
          opacity: 0,
          x: -10,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        }
      )
      .call(
        () => {
          const animationCompleteEvent = new Event(
            'presentationClientAnimationComplete'
          );
          document.dispatchEvent(animationCompleteEvent);
        },
        [],
        0.5
      );
  });
}
