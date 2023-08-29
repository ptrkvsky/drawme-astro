import { SplitText } from "gsap/SplitText";

import config from "src/config";
import gsap from "gsap";

/**
 * Animates quotes by revealing illustrations, marks, and lines of text.
 */
export function animateQuotes() {
  document.addEventListener("DOMContentLoaded", () => {
    const marks = document.querySelectorAll(".mark");
    const illustration = gsap.utils.toArray(".illustration");

    gsap.set(marks, {
      x: -10,
      opacity: 0,
    });

    gsap.set(illustration, {
      opacity: 0,
    });

    const quotesElement = document.querySelectorAll(".section-quotes .quote");

    if (!quotesElement.length) return;

    quotesElement.forEach((quoteElement) => {
      const wrapperImage = quoteElement.querySelector(".illustration");
      const mark = quoteElement.querySelector(".mark");
      const paragraph = quoteElement.querySelector(".split-text");
      const splitText = new SplitText(paragraph, { type: "lines" });
      const lines = splitText.lines;

      lines.forEach((line) => {
        gsap.set(line, {
          opacity: 0,
          y: 20,
        });
      });

      const tlQuote = gsap.timeline({
        scrollTrigger: {
          trigger: quoteElement,
          endTrigger: "footer",
          markers: config.mode === "development",
          start: "top 75%",
        },
      });

      tlQuote
        .to(wrapperImage, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "linear",
        })
        .to(mark, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
          delay: -0.5,
        })
        .call(() => {
          lines.forEach((line, index) => {
            gsap.to(line, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
            });
          });
        });
    });
  });
}
