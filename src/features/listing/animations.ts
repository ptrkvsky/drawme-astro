import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { preloadImages } from "../../features/listing/utils";

interface DOM {
  sections: {
    columns: Element;
    showcase: Element;
  };
  columns: NodeListOf<Element>;
  columnWraps: NodeListOf<Element>;
  itemsWrappers: NodeListOf<Element>;
  items: NodeListOf<Element>;
  images: NodeListOf<Element>;
}

// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
function initSmoothScrolling() {
  lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
  });
  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
}

function scroll(DOM: DOM) {
  // GSAP Scroll Triggers
  gsap
    .timeline({
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: true,
      },
    })
    .addLabel("start", 0)
    .to(
      DOM.sections.columns,
      {
        ease: "none",
        startAt: { scale: 1.1 },
        scale: 1,
      },
      "start"
    )
    .to(
      DOM.sections.columns,
      {
        scrollTrigger: {
          trigger: DOM.sections.showcase,
          start: 0,
          end: "top top",
          scrub: true,
        },
        ease: "power4.inOut",
        startAt: {
          opacity: 0.2,
        },
        opacity: 1,
        // repeat once (go back to "startAt" values)
        yoyo: true,
        repeat: 1,
      },
      "start"
    )
    .to(
      DOM.columnWraps,
      {
        ease: "none",
        yPercent: (pos) => (pos % 2 ? 3 : -3),
      },
      "start"
    );
}

export function initListingAnimations() {
  // Write an interface from this DOM object

  const DOM = {
    sections: {
      columns: document.querySelector(".section--columns"),
      showcase: document.querySelector(".section--showcase"),
    },
    columns: document.querySelectorAll(".section--columns > .columns"),
    columnWraps: document.querySelectorAll(".section--columns .column-wrap"),
    itemsWrappers: document.querySelectorAll(
      ".section--columns .column-wrap .column"
    ),
    items: document.querySelectorAll(".section--columns .column__item"),
    images: document.querySelectorAll(".section--columns .column__item-img"),
  };

  // Preload images
  preloadImages(".column__item-img").then(() => {
    // Lenis (smooth scrolling)
    initSmoothScrolling();
    // GSAP Scroll Triggers
    scroll(DOM);
  });
}
