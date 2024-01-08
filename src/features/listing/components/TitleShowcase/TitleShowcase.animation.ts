import config from "src/config";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

export function animateTitle() {
  const showCaseTitle = document.querySelector("#showcase-title");
  if (!showCaseTitle) return;

  const splitSheep = new SplitText(showCaseTitle.querySelectorAll(".word"), {
    type: `chars`,
  });

  gsap.set(splitSheep.chars, { yPercent: -103 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: showCaseTitle,
        endTrigger: "footer",
        markers: config.mode === "development",
        start: "top 75%",
      },
    })
    .to(splitSheep.chars, {
      duration: 1,
      yPercent: 0,
      stagger: 0.04,
      ease: "expo.inOut",
      onComplete: () => {
        const event = new Event("titleShowcaseAnimationComplete");
        document.dispatchEvent(event);
      },
    })
    .to(".section__year", {
      opacity: 1,
      duration: 0.7,
      delay: -0.25,
    });
}
