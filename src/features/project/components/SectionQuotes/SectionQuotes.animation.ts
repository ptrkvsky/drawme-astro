import { SplitText } from "gsap/SplitText";

import config from "src/config";
import gsap from "gsap";

/**
 * Animates quotes and related elements on the page using the GSAP animation library.
 *
 * This function is intended to be called when the DOM content has been fully loaded
 * (DOMContentLoaded event). It animates quotes, illustrations, and marks within quote sections
 * on the page. Each quote is animated with a specific timeline using GSAP.
 *
 * @remarks
 * Before using this function, make sure to include the GSAP library and set up any necessary
 * configurations, such as ScrollTrigger and other GSAP options.
 *
 * @see {@link https://greensock.com/docs/v3/GSAP|GSAP Documentation}
 * @see {@link https://greensock.com/docs/v3/Plugins/ScrollTrigger|GSAP ScrollTrigger Documentation}
 */
export function animateQuotes(): void {
  document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "mark"
    const marks = document.querySelectorAll(".mark");

    // Select all elements with the class "illustration"
    const illustration = gsap.utils.toArray(".illustration");

    // Set initial positions and opacity for "mark" elements
    gsap.set(marks, {
      x: -10, // Move "mark" elements 10 pixels to the left
      opacity: 0, // Start with opacity 0
    });

    // Set initial opacity for "illustration" elements
    gsap.set(illustration, {
      opacity: 0, // Start with opacity 0
      scale: 1.1, // Scale the image
    });

    // Select all elements with the class "quote" inside ".section-quotes"
    const quotesElement = document.querySelectorAll(".section-quotes .quote");

    // If no "quote" elements are found, exit the function
    if (!quotesElement.length) return;

    // Iterate through each "quote" element and create a GSAP timeline for animation
    quotesElement.forEach((quoteElement) => {
      // Find related elements within the current quote section
      const illustration = quoteElement.querySelector(".illustration");
      const mark = quoteElement.querySelector(".mark");
      const paragraph = quoteElement.querySelector(".split-text");

      // Split the paragraph into lines using SplitText
      const splitText = new SplitText(paragraph, { type: "lines" });
      const lines = splitText.lines;

      // Set initial positions and opacity for lines of text
      lines.forEach((line) => {
        gsap.set(line, {
          opacity: 0, // Start with opacity 0
          y: 20, // Move lines 20 pixels down
        });
      });

      // Create a GSAP timeline for the quote animation with ScrollTrigger configuration
      const tlQuote = gsap.timeline({
        scrollTrigger: {
          trigger: quoteElement,
          endTrigger: "footer", // Replace with the appropriate trigger for animation end
          markers: config.mode === "development", // Show GSAP markers in development mode
          start: "top 75%", // Animation starts when the element is 75% in view
        },
      });

      // Animation sequence for the quote
      tlQuote
        .to(illustration, {
          x: 0, // Move wrapper image to its original position
          opacity: 1, // Fade in the wrapper image
          scale: 1,
          duration: 0.75, // Animation duration in seconds
          ease: "expo.inout", // Animation easing
        })
        .to(mark, {
          x: 0, // Move the mark to its original position
          opacity: 1, // Fade in the mark
          duration: 0.5, // Animation duration in seconds
          ease: "power4.out", // Animation easing
          delay: -0.5, // Delay the mark animation by -0.5 seconds
        })
        .call(() => {
          // Animate individual lines of text with a delay
          lines.forEach((line, index) => {
            gsap.to(line, {
              opacity: 1, // Fade in the line of text
              y: 0, // Move the line of text to its original position
              duration: 0.8, // Animation duration for each line
              delay: index * 0.2, // Delay each line by index * 0.2 seconds
            });
          });
        });
    });
  });
}
