import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import config from "src/config";

gsap.registerPlugin(SplitText);

interface RevealConfig {
  target: string;
  type?: `chars` | `words` | `lines`;
  trigger: string;
  callback?: () => void;
}

export function revealTitle({ target, type, trigger, callback }: RevealConfig) {
  const splitedElement = new SplitText(target, {
    type,
  });

  gsap.set(splitedElement[type], { yPercent: -110 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger,
        endTrigger: "footer",
        markers: config.mode === "development",
        start: "top 75%",
      },
    })
    .to(splitedElement[type], {
      duration: 1,
      yPercent: 0,
      stagger: splitedElement[type].length / 1000,
      ease: "expo.inOut",
    });
}

export function revealTitleMobile({ target, trigger, callback }: RevealConfig) {
  const splitedElement = new SplitText(target, {
    type: "words",
  });
  const thesplit = new SplitText(splitedElement.words, {
    type: "words",
  });

  gsap.set(thesplit.words, { yPercent: -103 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger,
        endTrigger: "footer",
        markers: config.mode === "development",
        start: "top 75%",
      },
    })
    .to(thesplit.words, {
      duration: 1,
      yPercent: 0,
      stagger: 0.04,
      ease: "expo.inOut",
    })
    .call(() => {
      if (callback) {
        callback();
      }
    });
}
