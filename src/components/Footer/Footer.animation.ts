import { splitChars } from "@helpers/splitChars";
import config from "src/config";
import gsap from "gsap";

const marker: ScrollTrigger.MarkersVars | boolean =
  config.mode === "development"
    ? {
        startColor: "blue",
        endColor: "hotpink",
        fontSize: "16px",
        fontWeight: "bold",
        indent: 120,
      }
    : false;

const timelineConfig = {
  scrollTrigger: {
    markers: marker,
    trigger: "footer",
    start: "top 100%", // top of the element, bottom of the viewport
  },
};

const baseDelay = 0.25;
const revealBlocDuration = 1;

export function revealGoodbye() {
  const splitedGoodbye = splitChars("#goodbye");

  gsap.set(splitedGoodbye, { yPercent: -110, scale: 0.9 });

  const delay = baseDelay + revealBlocDuration - 0.1;

  gsap
    .timeline(timelineConfig)
    .to(splitedGoodbye, {
      yPercent: 0,
      delay,
      duration: 0.75,
      ease: "expo.out",
      stagger: 0.02,
      scale: 1,
    })
    .call(() => {
      const goodBye = document.querySelector("#goodbye");
      goodBye.classList.remove("split-text");
      goodBye.classList.remove("o-hidden");
    });
}

export function revealBlocs() {
  const blocs: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".js__reveal-line");

  if (!blocs.length) return;

  gsap
    .timeline(timelineConfig)
    .from(blocs, {
      xPercent: -25,
      opacity: 0,
      delay: baseDelay,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
    })
    .call(() => {
      blocs.forEach((bloc) => {
        bloc?.parentElement?.classList.remove("o-hidden");
      });
      document.querySelector("#wrapper-infos")?.classList.remove("o-hidden");
    });
}
