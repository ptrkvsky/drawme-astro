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
  gsap.fromTo(
    '#mini-menu-presentation .categorie',
    {
      opacity: 0,
      x: -10,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: {
        each: 0.1,
        ease: 'expo4.inOut',
      },
    }
  );
};

export const animateSeparators = () => {
  gsap.fromTo(
    '#mini-menu-presentation .separator',
    {
      opacity: 0,
      y: -10,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.33,
      ease: 'expo1.inOut',
      delay: 1,
    }
  );
};
