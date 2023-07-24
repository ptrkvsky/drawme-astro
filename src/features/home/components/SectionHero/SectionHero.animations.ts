import config from '../../../../config';

import gsap from 'gsap';
import {
  animateCategories,
  animateSeparators,
  revealResize,
} from '@features/home/components/MiniMenu/MiniMenu.animations';

export function animateTitle() {
  const selector = gsap.utils.selector(
    document.querySelector('#section-hero-title')
  );

  // Duration of preloader
  const isPreloaderSeen = sessionStorage.getItem('isPreloaderSeen');
  const envDelay = config.mode === 'development' ? 1500 : 8500;
  const delay = isPreloaderSeen ? 0 : envDelay;

  setTimeout(() => {
    gsap.set(selector('.letters div'), { yPercent: -103 });
    gsap.set('#section-hero-title', { autoAlpha: 1 });

    gsap
      .timeline()
      .to(selector('.letters div'), {
        duration: 1,
        yPercent: 0,
        stagger: 0.05,
        ease: 'expo.inOut',
      })
      .to(selector(".letters div:not([data-char='.'])"), {
        duration: 1,
        yPercent: 103,
        stagger: 0.1,
        ease: 'expo.inOut',
      })
      .call(() => {
        revealResize('#mini-menu-mark');
      })
      .call(() => {
        animateCategories();
      })
      .call(() => {
        animateSeparators();
      });
  }, delay);
}
