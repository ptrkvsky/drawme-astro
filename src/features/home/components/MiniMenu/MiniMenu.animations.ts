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
