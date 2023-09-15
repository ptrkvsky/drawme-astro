import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import config from "src/config";

gsap.registerPlugin(SplitText, CustomEase, CustomBounce);

interface RevealConfig {
  target: string;
  type?: `chars` | `words` | `lines`;
  trigger: string;
  callback?: () => void;
}

interface RevealColorsConfig {
  target: string;
  trigger: string;
  callback?: () => void;
}

export function revealTitle({ target, type, trigger }: RevealConfig) {
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

export function revealColors({ target, trigger }: RevealColorsConfig) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger,
        endTrigger: "footer",
        markers: config.mode === "development",
        start: "top 75%",
      },
    })
    .from(target, {
      opacity: 0,
      x: -10,
      stagger: 0.2,
      duration: 0.5,
      ease: "linear",
    });
}

export function bounceBabyColor(target: Element) {
  let scaleValue = 0.93;
  let squashValue = 1;
  // Vérifier si l'utilisateur accède au site depuis un appareil mobile ou tablette
  if (
    /Mobi|Tablet/i.test(navigator.userAgent) ||
    /Android/i.test(navigator.userAgent)
  ) {
    scaleValue = 0.8; // Utiliser 0.8 pour les appareils mobiles ou tablettes
    squashValue = 2; // Utiliser 0.8 pour les appareils mobiles ou tablettes
  }

  CustomBounce.create("myBounce", {
    strength: 0.5,
    squash: squashValue,
    squashID: "myBounce-squash",
  });
  gsap.from(target, { duration: 1, scale: scaleValue, ease: "myBounce" });
}
