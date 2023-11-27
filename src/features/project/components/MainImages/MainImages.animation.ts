import gsap from "gsap";

/**
 * Animates the reveal of images using GSAP.
 *
 * @function revealImages
 * @description This function animates the reveal of images using GSAP animations. It listens for the 'brushAnimationComplete' event and then animates the opacity and position of elements with the class '.reveal-illustration'. After the animation is complete, it dispatches the 'mainImagesAnimationComplete' event.
 *
 * @global
 * @returns {void}
 *
 * @example
 *
 * revealImages();
 */
export function revealImages() {
  gsap.set(".reveal-illustration", {
    opacity: 0,
  });

  document.addEventListener("brushAnimationComplete", () => {
    const tlRevealImages = gsap.timeline(); // New timeline for the second animation

    tlRevealImages
      .fromTo(
        ".reveal-illustration",
        {
          opacity: 0,
          x: -10,
          scale: 1.1,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
        }
      )
      .call(
        () => {
          const animationCompleteEvent = new Event(
            "mainImagesAnimationComplete"
          );
          document.dispatchEvent(animationCompleteEvent);
        },
        [],
        0.5
      );
  });
}
