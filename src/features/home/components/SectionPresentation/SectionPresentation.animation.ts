import gsap from 'gsap';
import _SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import config from 'src/config';

const scaleIllustration = {
  scale: 1.1,
  duration: 0.75,
  ease: 'power4.out',
};

/**
 * @desc Switch canva from back to white
 * @param idSection
 * @param handleOnComplete
 */
export const switchCanva = (
  idSection: string,
  handleOnComplete: () => void
) => {
  console.log('--------visible');
  ScrollTrigger.create({
    trigger: idSection,
    start: 'top bottom',
    endTrigger: 'footer',
    markers: true,
    // onEnter: () => {
    //   handleOnComplete();
    // },
    onToggle: (self) => {
      handleOnComplete();
      console.log('toggled, isActive:', self.isActive);
    },
  });
};

export const reveal = (
  idSection: string,
  splitIntroPresentation: _SplitText,
  splitIntroDetail: _SplitText,
  handleOnComplete: () => void
) => {
  setTimeout(() => {
    // const selectElement = gsap.utils.selector(refSection);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: idSection,
          endTrigger: 'footer',
          markers: !isProd,
          start: '0 center',
        },
      })
      // -------------------- Reveal image book
      // .addLabel("revealBook")
      // .from(selectElement(".illustration.book"), scaleIllustration, "revealBook")
      // .to(selectElement(".illustration.book .reveal"), revealParam, "revealBook")
      // .set(selectElement(".illustration.book .reveal"), { display: "none" })
      // -------------------- Reveal image book
      // .addLabel("revealFingers")
      // .from(selectElement(".illustration.fingers"), scaleIllustration, "revealFingers-=0.35")
      // .to(selectElement(".illustration.fingers .reveal"), revealParam, "revealFingers-=0.35")
      // .set(selectElement(".illustration.fingers .reveal"), { display: "none" })

      // -------------------- Reveal image crayon
      // .addLabel("revealCrayon")
      // .from(selectElement(".illustration.crayon"), scaleIllustration, "revealCrayon-=0.25")
      // .to(selectElement(".illustration.crayon .reveal"), revealParam, "revealCrayon-=0.25")
      // .set(selectElement(".illustration.crayon .reveal"), { display: "none" })

      // -------------------- Display Intro
      .from(splitIntroPresentation.lines, {
        y: 100,
        ease: 'power4.out',
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
        opacity: 0,
      })
      // -------------------- Display Detail
      .from(splitIntroDetail.lines, {
        y: 100,
        ease: 'power4.out',
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
        opacity: 0,
        delay: -0.3,
      })
      // -------------------- Animation is complete
      .from(splitIntroPresentation.lines, {
        onComplete: handleOnComplete,
      });
  }, 100);
};
