import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

/**
 * Double splits the characters of an HTML element's text content into individual elements
 * and returns an array of those elements. Don't forget to add the class .split-text to the element you want to split
 * if you want a reveal effect.
 *
 * @param {string} selector - A CSS selector for the target HTML element.
 * @returns {HTMLElement[] | undefined} An array of HTML elements representing the split characters,
 * or undefined if the element specified by the selector is not found.
 *
 * @example
 * const splitCharacters = splitChars('.text-element');
 * if (splitCharacters) {
 *   splitCharacters.forEach((charElement) => {
 *     // Manipulate each individual character element here
 *   });
 * }
 */
export function splitChars(selector: string | HTMLElement) {
  let elementToSplit: HTMLElement | null;

  if (typeof selector === `string`) {
    elementToSplit = document.querySelector(selector);
  } else {
    elementToSplit = selector;
  }

  if (!elementToSplit) return;

  const elementSplited = new SplitText(elementToSplit, {
    type: `lines`,
  });

  const elementReSplited = new SplitText(elementSplited.lines, {
    type: `chars`,
  });

  return elementReSplited.chars;
}
