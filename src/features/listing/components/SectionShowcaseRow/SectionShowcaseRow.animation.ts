import { splitChars } from "@helpers/splitChars";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import config from "src/config";

gsap.registerPlugin(SplitText);

/**
 * Initializes SplitText animation for an array of HTMLElements by splitting their text content into characters.
 * The characters are animated with GSAP to apply a specific y-axis transformation.
 *
 * @param elements - An array of HTMLElements to be split and animated.
 * @returns An array of GSAP animations targeting individual characters after the split.
 */
export function initSplit(element: HTMLElement) {
  const splitedChars = splitChars(element);

  if (!splitedChars) return [];
  gsap.set(splitedChars, {
    yPercent: -103,
  });

  return splitedChars;
}

/**
 * Animates the row's content.
 *
 * @param row - The row to be animated.
 */
export function animateRow(row: HTMLLinkElement) {
  const date: HTMLElement | null = row.querySelector(".row__header__date");
  const name: HTMLElement | null = row.querySelector(".row__header__name");
  const tagline: HTMLElement | null = row.querySelector(
    ".row__header__tagline"
  );

  if (!date || !name || !tagline) return;
  const nameChars = initSplit(name);
  const dateChars = initSplit(date);
  const taglineChars = initSplit(tagline);

  const imagesRow = row.querySelectorAll(".row__content-img");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: row,
        endTrigger: "footer",
        markers: config.mode === "development",
        start: "top 75%",
      },
    })
    // Date
    .to(dateChars, {
      duration: 1,
      yPercent: 0,
      stagger: 0.08,
      ease: "expo.inOut",
    })
    // Name
    .to(nameChars, {
      duration: 0.5,
      yPercent: 0,
      stagger: nameChars.length / 1000,
      ease: "expo.inOut",
      delay: -0.5,
    })
    // Images projects
    .to(imagesRow, {
      xPercent: 0,
      autoAlpha: 1,
      stagger: 0.1,
      duration: 1,
      ease: "expo.inOut",
      delay: -1,
    })
    // Tagline
    .to(taglineChars, {
      duration: 0.5,
      yPercent: 0,
      stagger: taglineChars.length / 2000,
      ease: "expo.inOut",
      delay: -0.5,
    });
}
