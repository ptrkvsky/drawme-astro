import gsap from 'gsap';

export function revealImages() {
  gsap.set('.reveal-illustration', {
    opacity: 0,
  });

  document.addEventListener('brushAnimationComplete', () => {
    const tlRevealImages = gsap.timeline(); // New timeline for the second animation

    tlRevealImages.fromTo(
      '.reveal-illustration',
      {
        opacity: 0,
        x: -10,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        onComplete: () => {
          const animationCompleteEvent = new Event(
            'mainImagesAnimationComplete'
          );
          document.dispatchEvent(animationCompleteEvent);
        },
      }
    );
  });
}
