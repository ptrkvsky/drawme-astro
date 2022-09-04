import gsap from 'gsap';

/**
 * @description reveal and element and reduce the size from element
 * @param element
 * @param scaleOrign
 */
export const revealResize = (element, scaleOrign = 1.1) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: scaleOrign,
    },
    {
      opacity: 1,
      scale: 1,
    }
  );
};

export const animateCategories = () => {
  gsap.to('#mini-menu-presentation .categorie', {
    opacity: 1,
    stagger: {
      each: 0.4,
      ease: 'expo4.inOut',
    },
  });
};

export const animateSeparators = () => {
  gsap.fromTo(
    '#mini-menu-presentation .separator',
    {
      opacity: 0,
      y: -100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'expo4.inOut',
      delay: 0.35 * 5,
    }
  );
};
