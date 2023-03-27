import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import config from 'src/config';

gsap.registerPlugin(ScrollTrigger);
// Switch Canva from black to white
const handleToggleCanva = () => {
  document.getElementById('main-canva').classList.toggle('visible');
  document.getElementById('canva-white').classList.toggle('visible');
  document.querySelector('body').classList.toggle('canva-black');
  document.querySelector('body').classList.toggle('canva-white');
};

export const switchCanva = () => {
  ScrollTrigger.create({
    trigger: '#section-presentation',
    start: 'top bottom',
    endTrigger: 'footer',
    markers: config.mode === 'development',
    onToggle: () => {
      handleToggleCanva();
    },
  });
};

export const revealText = () => {
  gsap.set(`.intro-presentation .path-zigwigwi`, {
    drawSVG: false,
  });

  const paramsReveal = {
    yPercent: -100,
    scale: 1,
    ease: 'power2.out',
    duration: 0.3,
  };

  const paramsScaleImage = {
    ease: 'power2.out',
    duration: 0.3,
    delay: -0.3,
    scale: 1.3,
  };

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#section-presentation',
        endTrigger: 'footer',
        markers: config.mode === 'development',
        start: 'top 75%',
      },
    })
    // to avoid clipping with switch canva illustration are hidden, we wait for it to complete
    .pause(0.5)
    .to('.illustration', {
      opacity: 1,
    })

    // -- Animate book
    // Reveal
    .to('.illustration.book .reveal', paramsReveal)
    // Scale image
    .from('.illustration.book img', paramsScaleImage)
    // Hide reveal
    .set('.illustration.book .reveal', {
      autoAlpha: 0,
    })
    // -- Animate letter
    // Reveal
    .to('.illustration.letters .reveal', {
      ...paramsReveal,
      yPercent: 100,
    })
    // Scale image
    .from('.illustration.letters img', paramsScaleImage)
    // Hide reveal
    .set('.illustration.letters .reveal', {
      autoAlpha: 0,
    })
    //--  Animate fingers
    // Reveal
    .to('.finger-reveal', {
      ...paramsReveal,
      yPercent: 0,
      xPercent: -100,
    })
    .from('.finger-img', paramsScaleImage)
    // Hide reveal
    .set('.finger-reveal', {
      autoAlpha: 0,
    })
    //--  Animate crayon
    // Reveal
    .to('.illustration.crayon .reveal', paramsReveal)
    // Scale image
    .from('.illustration.crayon img', paramsScaleImage)
    // Hide reveal
    .set('.illustration.crayon .reveal', {
      autoAlpha: 0,
    })
    // Animate intro presentation
    .to('.intro-presentation', {
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
    .to('#intro-detail', {
      opacity: 1,
      ease: `power3.inOut`,
      duration: 1.5,
      delay: -1.4,
    });
};
