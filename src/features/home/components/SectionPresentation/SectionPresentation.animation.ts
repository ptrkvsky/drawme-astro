import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import config from 'src/config';

gsap.registerPlugin(ScrollTrigger);
// Switch Canva from black to white
const handleToggleCanva = () => {
  const mainCanva = document.getElementById('main-canva');
  const canvaWhite = document.getElementById('canva-white');

  if (!mainCanva || !canvaWhite) {
    console.log('mainCanva', mainCanva);
    console.log('canvaWhite', canvaWhite);

    return;
  }
  const body = document.querySelector('body');

  console.log(mainCanva, 'visible');
  canvaWhite.classList.toggle('visible');
  body.classList.toggle('canva-black');
  body.classList.toggle('canva-white');
};

export const switchCanva = () => {
  const sectionPresentation = document.getElementById('section-presentation');
  if (!sectionPresentation) {
    console.log('🌇 sectionPresentation not found');
    return;
  }

  const marker: ScrollTrigger.MarkersVars = {
    startColor: 'yellow',
    endColor: 'red',
    fontSize: '36px',
    fontWeight: 'bold',
    indent: 40,
  };

  setTimeout(() => {
    ScrollTrigger.create({
      trigger: '#section-presentation',
      start: 'top bottom',
      endTrigger: 'footer',
      markers: marker,
      onToggle: () => {
        handleToggleCanva();
      },
    });
  }, 500);
};

export const revealTextSectionPresentation = () => {
  gsap.set(`.intro-presentation .path-zigwigwi`, {
    drawSVG: false,
  });

  const paramsScaleImage = {
    ease: 'linear',
    duration: 1,
    delay: -0.3,
    opacity: 0,
  };

  const sectionPresentation = <HTMLElement>(
    document.querySelector('#section-presentation')
  );

  if (!sectionPresentation) {
    console.log('sectionPresentation not found');
  }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: sectionPresentation,
        endTrigger: 'footer',
        markers: config.mode === 'development',
        start: 'top 75%',
      },
    })
    // to avoid clipping with switch canva illustration are hidden, we wait for it to complete
    .pause(0.5)
    .to('#section-presentation .illustration', {
      opacity: 1,
    })

    // -- Animate book
    // Scale image
    .from('.illustration.book img', { ...paramsScaleImage, delay: 0 })

    //--  Animate fingers
    .from('.finger-img', paramsScaleImage)

    // -- Animate letter
    // Scale image
    .from('.illustration.letters img', paramsScaleImage)

    //--  Animate crayon
    // Scale image
    .from('.illustration.crayon img', paramsScaleImage)

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
