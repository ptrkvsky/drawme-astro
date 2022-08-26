import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import config from 'src/config';

gsap.registerPlugin(ScrollTrigger, SplitText);
// Switch Canva from black to white
const handleToggleCanva = () => {
  document.getElementById('canva-black').classList.toggle('visible');
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
  new SplitText('#intro-presentation', {
    type: 'lines',
  });
  const splitIntroPresentation = new SplitText('#intro-presentation > div', {
    type: 'lines',
  });
  new SplitText('#intro-detail', {
    type: 'lines',
  });
  const splitIntroDetail = new SplitText('#intro-detail > div', {
    type: 'lines',
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#section-presentation',
        endTrigger: 'footer',
        markers: config.mode === 'development',
        start: 'top 35%',
      },
    })
    .from(splitIntroPresentation.lines, {
      y: 50,
      ease: 'power1.out',
      skewY: 5,
      stagger: {
        amount: 0.3,
      },
      opacity: 0,
    })
    .from(splitIntroDetail.lines, {
      y: 50,
      ease: 'power1.out',
      skewY: 5,
      stagger: {
        amount: 0.3,
      },
      opacity: 0,
      delay: -0.3,
    });
};
