import gsap from "gsap";

/**
 * Function to reveal colors using GSAP animation.
 */
export function revealColors() {
  // Select all HTML elements with the class 'color-item'
  const colorsElement: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".color-item");

  // Check if any elements with the class 'color-item' were found
  if (!colorsElement) return;

  // Set initial opacity of color elements to 0
  gsap.set(colorsElement, {
    opacity: 0,
  });

  // Listen for the 'presentationClientAnimationComplete' event
  document.addEventListener("presentationClientAnimationComplete", () => {
    // Create a new GSAP timeline for the second animation
    const tlRevealColors = gsap.timeline();

    // Animate the color elements
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
          // Dispatch a custom event when the animation is complete
          const animationCompleteEvent = new Event(
            "revealColorsAnimationComplete"
          );
          document.dispatchEvent(animationCompleteEvent);
        },
      }
    );
  });
}
