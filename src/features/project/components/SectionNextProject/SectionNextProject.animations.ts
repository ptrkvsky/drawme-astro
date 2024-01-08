import { ParamsSplitAndReveal, splitAndReveal } from "@helpers/gsap";
import { SplitText } from "gsap/SplitText";

import gsap from "gsap";
import config from "src/config";

gsap.registerPlugin(SplitText);

export function toggleClassClickableOnSmoothWrapper() {
  const smoothWrapper = document.querySelector("#smooth-wrapper");
  if (!smoothWrapper) return;

  smoothWrapper.classList.toggle("is-not-clickable");
}

/**
 * Displays or hides the "next-project" element with optional animations based on the given direction.
 *
 * This function is responsible for revealing or hiding the "next-project" element and triggering animations
 * based on the direction parameter. If direction is 1, it reveals the element with animations; if direction is -1,
 * it hides the element with animations. If direction is neither 1 nor -1, no action is taken.
 *
 * @param direction - The direction of the action: 1 to reveal, -1 to hide, or other values for no action.
 * @returns {void} - This function does not return a value.
 */
export function displayNextProject(direction: number) {
  const paramsSplitReveal: ParamsSplitAndReveal = {
    element: ".reveal",
    typeSplit: "chars",
    trigger: "body",
    delay: 0.35,
  };

  if (direction == 1) {
    // Reveal
    gsap.set(`#svg-cercle-line-1`, {
      drawSVG: false,
    });

    // const chars = document.querySelectorAll(".reveal div");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#next-project",
          start: "top 85%", // top of the element, bottom of the viewport
        },
        delay: 0,
      })
      // .to(chars, {
      //   duration: 1,
      //   yPercent: 0,
      //   stagger: 0.04,
      //   ease: "expo.inOut",
      //   onComplete: () => {
      //     // document.querySelectorAll(".reveal").forEach((el) => {
      //     //   el.classList.remove("o-hidden");
      //     //   el.classList.remove("split-text");
      //     // });
      //     document.querySelector("#wrapper-hide")?.classList.remove("o-hidden");
      //   },
      // })
      .call(() => {
        toggleClassClickableOnSmoothWrapper();
      })
      .to(`#svg-cercle-line-1`, {
        drawSVG: true,
        ease: `expo.inOut`,
        delay: 1,
        duration: 1.2,
      });
  }
  if (direction == -1) {
    // Hide
    gsap.set(`#svg-cercle-line-1`, {
      drawSVG: true,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#next-project",
          start: "top 75%", // top of the element, bottom of the viewport
        },
      })
      .to(`#svg-cercle-line-1`, {
        drawSVG: false,
        ease: `power3.inOut`,
        duration: 0.5,
      })
      .call(() => {
        toggleClassClickableOnSmoothWrapper();
      });
  }
}

/**
 * Moves the "next-project" div element to the "portal" div element if both elements exist.
 *
 * This function checks if the "next-project" and "portal" div elements exist in the DOM.
 * If both elements are present, it appends the "next-project" div to the "portal" div,
 * effectively moving it within the DOM structure.
 *
 * @returns {void} - This function does not return a value.
 */
export function moveToPortal() {
  const portalDiv = document.getElementById("portal");
  const nextProjectDiv = document.getElementById("next-project");
  if (!nextProjectDiv || !portalDiv) return;

  portalDiv.appendChild(nextProjectDiv);
}

/**
 * Retrieves a marker object with color, font size, font weight, and indentation properties
 * based on the current application mode.
 *
 * @returns {Object | false} - A marker object with the following properties:
 *   - `startColor`: The color for the start marker.
 *   - `endColor`: The color for the end marker.
 *   - `fontSize`: The font size for the marker text.
 *   - `fontWeight`: The font weight for the marker text.
 *   - `indent`: The indentation in pixels for the marker text.
 * If the application mode is not "development," it returns `false`.
 */
export function getMarker() {
  const marker = {
    startColor: "purple",
    endColor: "pink",
    fontSize: "36px",
    fontWeight: "bold",
    indent: 20,
  };

  const markers = config.mode === "development" ? marker : false;

  return markers;
}

/**
 * Updates the color of an SVG element by modifying its "fill" or "stroke" attribute.
 *
 * @param newColor - The new color to apply to the SVG element.
 * @throws Will throw an error if the specified SVG element with the given ID is not found in the DOM.
 */
export function setSvgColor(newColor: string) {
  const svgElement = document.querySelector("#svg-cercle-line-1");

  // Check if the SVG element was found
  if (svgElement) {
    // Update the fill or stroke attribute to change the color
    svgElement.setAttribute("fill", newColor); // For shapes
    // svgElement.setAttribute("stroke", newColor); // For lines or outlines
  } else {
    console.error("SVG element not found");
  }
}
