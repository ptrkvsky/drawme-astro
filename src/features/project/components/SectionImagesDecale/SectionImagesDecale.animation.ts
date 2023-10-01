import gsap from "gsap";
import config from "src/config";

/**
 * Animates the reveal of images inside elements with the class "wrapper-image"
 * using the GSAP animation library.
 *
 * This function searches for elements with the class "wrapper-image" in the DOM
 * and applies an animation that reveals each image by changing its opacity,
 * scale, and horizontal position.
 *
 * The animation is triggered when the element with the class "wrapper-image" is
 * scrolled into view. The animation options can be configured using GSAP's
 * ScrollTrigger and Tweens.
 *
 * @remarks
 * Before using this function, make sure to include the GSAP library and set up
 * any necessary configurations, such as ScrollTrigger and other GSAP options.
 *
 * @see {@link https://greensock.com/docs/v3/GSAP|GSAP Documentation}
 * @see {@link https://greensock.com/docs/v3/Plugins/ScrollTrigger|GSAP ScrollTrigger Documentation}
 */
export function revealImages(): void {
  // Get all elements with the class "wrapper-image"
  const wrappers = document.querySelectorAll(".wrapper-image");

  // If no elements with the class "wrapper-image" are found, exit the function
  if (!wrappers.length) return;

  // Loop through each "wrapper-image" element and apply the GSAP animation
  wrappers.forEach((wrapper) => {
    // Find the image element inside the current wrapper
    const image = wrapper.querySelector(".image-decale");
    if (!image) return;

    // Create a GSAP timeline with ScrollTrigger configuration
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapper,
          endTrigger: "footer", // Replace with the appropriate trigger for animation end
          markers: config.mode === "development", // Show GSAP markers in development mode
          start: "top 75%", // Animation starts when the element is 75% in view
        },
      })
      .from(image, {
        opacity: 0, // Start with opacity 0
        scale: "1.1", // Scale the image to 1.1 times its original size
        translateX: -20, // Move the image 20 pixels to the left
        duration: 0.5,
        ease: "expo.inout",
      });
  });
}
