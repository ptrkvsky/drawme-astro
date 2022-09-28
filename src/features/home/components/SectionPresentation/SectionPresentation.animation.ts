import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { splitText } from '@helpers/gsap';
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
  // Split texts
  // const splitIntroPresentation = splitText('#intro-presentation', 'lines');
  // const splitIntroDetail = splitText('#intro-detail', 'lines');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#section-presentation',
        endTrigger: 'footer',
        markers: config.mode === 'development',
        start: 'top 35%',
      },
    })
    .from('#intro-presentation', {
      opacity: 0,
      scale: 0.995,
      ease: `power1.in`,
      duration: 1.5,
    })
    .from(`#intro-presentation .path-zigwigwi`, {
      drawSVG: false,
    })

    // Intro presentation reveal
    // Split text
    // .from(splitIntroPresentation.lines, {
    //   y: 50,
    //   ease: 'power1.out',
    //   skewY: 5,
    //   stagger: {
    //     amount: 0.3,
    //   },
    //   duration: 0.5,
    //   opacity: 0,
    // })
    // Add remove overflow hidden
    // .call(() => {
    //   document
    //     .querySelector('#intro-presentation')
    //     .classList.add('text-visible');
    // })
    // Animate the zigwigwi
    .to(`#intro-presentation .path-zigwigwi`, {
      drawSVG: true,
      ease: `power3.inOut`,
      delay: 0.4,
      duration: 1.5,
    })
    .from('#intro-detail', {
      opacity: 0,
      ease: `power3.inOut`,
      duration: 1.5,
      delay: -0.4,
    });
  // Intro detail représentation
  // .from(splitIntroDetail.lines, {
  //   y: 50,
  //   ease: 'power1.out',
  //   skewY: 5,
  //   stagger: {
  //     amount: 0.3,
  //   },
  //   opacity: 0,
  //   delay: -0.3,
  // });
};
