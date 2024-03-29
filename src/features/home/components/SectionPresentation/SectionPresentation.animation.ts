import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import config from "src/config";

gsap.registerPlugin(ScrollTrigger);
// Switch Canva from black to white
const handleToggleCanva = () => {
  document.getElementById("main-canva").classList.toggle("visible");
  document.getElementById("canva-white").classList.toggle("visible");
  document.querySelector("body").classList.toggle("canva-black");
  document.querySelector("body").classList.toggle("canva-white");
};

export const switchCanva = () => {
  ScrollTrigger.create({
    trigger: "#section-presentation",
    start: "top bottom",
    endTrigger: "footer",
    markers: config.mode === "development",
    onToggle: () => {
      handleToggleCanva();
    },
  });
};

export const revealText = () => {
  gsap.set(`.intro-presentation .path-zigwigwi`, {
    drawSVG: false,
  });

  const paramsScaleImage = {
    ease: "expo.inout",
    duration: 0.75,
    delay: -0.3,
    opacity: 0,
    scale: 2,
  };

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-presentation",
        endTrigger: "footer",
        markers: config.mode === "development",
        start: "top 75%",
      },
    })
    // to avoid clipping with switch canva illustration are hidden, we wait for it to complete
    .pause(0.5)
    .to("#section-presentation .illustration", {
      opacity: 1,
    })

    // -- Animate book
    // Scale image
    .from(".illustration.book img", { ...paramsScaleImage, delay: 0 })

    //--  Animate fingers
    .from(".finger-img", paramsScaleImage)

    // -- Animate letter
    // Scale image
    .from(".illustration.letters img", paramsScaleImage)

    //--  Animate crayon
    // Scale image
    .from(".illustration.crayon img", paramsScaleImage)

    // Animate intro presentation
    .to(".intro-presentation", {
      opacity: 1,
      ease: `power1.in`,
      duration: 1.5,
      delay: -0.9,
    })
    // Reveal the zigwigwi
    .to(`.intro-presentation .path-zigwigwi`, {
      drawSVG: true,
      ease: `power3.inOut`,
      duration: 1.5,
    })
    // Reveal the intro detail
    .to("#intro-detail", {
      opacity: 1,
      ease: `power3.inOut`,
      duration: 1.5,
      delay: -1.4,
    });
};
