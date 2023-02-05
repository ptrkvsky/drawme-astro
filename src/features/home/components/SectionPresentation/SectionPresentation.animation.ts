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
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#section-presentation',
        endTrigger: 'footer',
        markers: config.mode === 'development',
        start: 'top 35%',
      },
    })

    // Animate book
    .to('.illustration.book', {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    })
    // Animate fingers
    .to('.illustration.fingers .wrapper-overflow', {
      opacity: 1,
      duration: 1,
      delay: -0.9,
      ease: 'power1.inOut',
    })
    // Animate intro presentation
    .to('.intro-presentation', {
      opacity: 1,
      ease: `power1.in`,
      duration: 1.5,
      delay: -0.9,
    })
    // Hide zigwigwi
    .set(`.intro-presentation .path-zigwigwi`, {
      drawSVG: false,
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
    })
    .to('.illustration.crayon', {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      delay: -1.4,
    })
    .to('.illustration.letters', {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      delay: -0.9,
    });
};
