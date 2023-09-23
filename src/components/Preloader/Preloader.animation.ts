import gsap from "gsap";
import config from "src/config";

/**
 * Animates the preloader screen, transitioning to the main content display.
 */
function animatePreloader() {
  const isProd = config.mode === "development";
  const canva = document.querySelector("#main-canva");

  gsap
    .timeline()
    .set("body", {
      opacity: 1,
      background: "#FFF",
    })
    // Hide svg path
    .set("#line1", {
      drawSVG: false,
      duration: 0,
    })
    // Hide intro text
    .to("#logo-wrapper-text", {
      autoAlpha: 0,
      delay: 1,
      duration: 1,
    })
    // Hide intro text
    .set("#logo-wrapper-text", {
      display: "none",
    })
    // Draw the path
    .to("#line1", {
      drawSVG: true,
      ease: `linear`,
      duration: isProd ? 10 : 0.5,
    })
    .call(() => {
      sessionStorage.setItem("isPreloaderSeen", "true");
    });

  gsap
    .timeline() // Fill in the path
    .to("#line1", {
      fill: `#000`,
      duration: isProd ? 0.75 : 0.1,
      ease: `linear`,
      delay: 5,
    })
    // Fade the logo out
    .to("#svg-logo", {
      opacity: 0,
      duration: isProd ? 0.75 : 0.1,
      ease: `linear`,
    })
    .set("#logo-wrapper-relative", {
      display: "none",
    })
    .set("#logo-wrapper-text", {
      display: "none",
    })
    // Show content
    .set(["#main-content"], {
      opacity: "1",
    })
    .to(["#header", "#burger-button"], {
      opacity: 1,
      delay: 3,
    });

  setTimeout(() => {
    if (!canva) return;
    canva.classList.add("visible");
  }, 6800);
}

/**
 * Animates the page in by setting various CSS properties and making elements visible.
 * This function is typically used to transition from a preloader screen to the main content.
 */
export function animatePageIn() {
  const canva = document.querySelector("#main-canva");

  gsap
    .timeline()
    .set("body", {
      opacity: 1,
      background: "#FFF",
    })
    .set(["#logo-wrapper-relative", "#logo-wrapper-text"], {
      display: "none",
    })
    .set(["#main-content", "#header", "#burger-button"], {
      opacity: "1",
    })
    .call(() => {
      if (canva) {
        document.querySelector("#main-canva")?.classList.add("visible");
      }
      sessionStorage.setItem("isPreloaderSeen", "false");
    });
}

/**
 * Animates the preloader screen, transitioning to the main content display.
 */
export function initPage() {
  const isMotionReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const isPreloaderSeen = sessionStorage.getItem("isPreloaderSeen");

  if (!isPreloaderSeen && !isMotionReduced) {
    animatePreloader();
  } else {
    animatePageIn();
  }
}
