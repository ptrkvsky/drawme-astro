import gsap from "gsap";
import config from "src/config";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

/**
 * @desc reveal title and description
 */
export function revealTexts() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: `#section-projets-title`,
        start: "top 85%", // when the top of the trigger hits the bottom of the viewport
      },
    })
    // Reveal
    .from("#section-projets-title", {
      opacity: 0,
      scale: 0.995,
      duration: 1,
      ease: "power1.inOut",
    })

    // Reveal description
    .to(`#section-projets-description`, {
      opacity: 1,
      delay: -1,
      duration: 1,
      ease: "power1.inOut",
    })
    .fromTo(
      `#section-projets-title .path-zigwigwi`,
      {
        drawSVG: false,
      },
      {
        drawSVG: true,
        ease: `power3.inOut`,
        duration: 1,
      }
    );
}

interface ConfigRevealProject {
  triggerSelector: string;
}

/**
 * Animate image and titlie projects
 */
export function revealProjects({ triggerSelector }: ConfigRevealProject) {
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

  const triggers: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(triggerSelector);

  if (triggers.length === 0) return;

  triggers.forEach((trigger) => {
    const title: HTMLHeadingElement | null =
      trigger.querySelector(".sub-title");
    const illustration: HTMLHeadingElement | null =
      trigger.querySelector(".illustration");

    if (!title || !illustration) return;

    const splitTitleOnce = new SplitText(title, {
      type: `chars`,
    });

    const splitTitleTwice = new SplitText(splitTitleOnce.chars, {
      type: `chars`,
    });

    gsap.set(splitTitleTwice.chars, { yPercent: -103 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger,
          endTrigger: "footer",
          markers: marker,
          start: "top 75%",
        },
      })
      .to(splitTitleTwice.chars, {
        duration: 1,
        yPercent: 0,
        stagger: 0.04,
        ease: "expo.inOut",
      })
      .call(() => {
        title.classList.remove("o-hidden");
        title.classList.remove("split-text");
      })
      .to(illustration, {
        opacity: 1,
        duration: 0.75,
        delay: -0.25,
      });
  });
}
