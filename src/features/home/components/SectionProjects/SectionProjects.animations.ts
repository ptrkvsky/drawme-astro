import gsap from 'gsap';
import { splitAndReveal, ParamsSplitAndReveal } from '@helpers/gsap';

export function revealTexts() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: `#section-projets-title`,
        start: 'top 85%', // when the top of the trigger hits the bottom of the viewport
      },
    })
    // Reveal
    .from('#section-projets-title', {
      opacity: 0,
      scale: 0.995,
      duration: 1,
      ease: 'power1.inOut',
    })
    .fromTo(
      `#draw-for-you__path`,
      {
        drawSVG: false,
      },
      {
        drawSVG: true,
        ease: `power3.inOut`,
        duration: 1,
      }
    )
    // Reveal description
    .to(`#section-projets-description`, {
      opacity: 1,
      delay: -1,
      duration: 1,
      ease: 'power1.inOut',
    });
}

export function revealIllustrations() {
  const paramsSplitAndRevealSubtitleIdentity: ParamsSplitAndReveal = {
    element: '#subtitle-identity',
    typeSplit: 'chars',
    trigger: '#subtitle-identity',
  };

  const paramsSplitAndRevealSubtitleLogo: ParamsSplitAndReveal = {
    element: '#subtitle-logo',
    typeSplit: 'chars',
    trigger: '#subtitle-logo',
  };

  const paramsSplitAndRevealSubtitlePackaging: ParamsSplitAndReveal = {
    element: '#subtitle-packaging',
    typeSplit: 'chars',
    trigger: '#subtitle-packaging',
  };

  const paramsSplitAndRevealSubtitleSocial: ParamsSplitAndReveal = {
    element: '#subtitle-social',
    typeSplit: 'chars',
    trigger: '#subtitle-social',
  };

  const paramsSplitAndRevealSubtitleWebsite: ParamsSplitAndReveal = {
    element: '#subtitle-website',
    typeSplit: 'chars',
    trigger: '#subtitle-website',
  };

  const marker = {
    startColor: 'red',
    endColor: 'pink',
    fontSize: '16px',
    fontWeight: 'bold',
    indent: 20,
  };

  gsap
    .timeline({
      scrollTrigger: {
        trigger: `#section-projets`,
        markers: marker,
        start: 'top 85%', // when the top of the trigger hits the bottom of the viewport
      },
    })

    .call(() => {
      splitAndReveal(paramsSplitAndRevealSubtitlePackaging);
      splitAndReveal(paramsSplitAndRevealSubtitleWebsite);
      splitAndReveal(paramsSplitAndRevealSubtitleIdentity);
      splitAndReveal(paramsSplitAndRevealSubtitleLogo);
      splitAndReveal(paramsSplitAndRevealSubtitleSocial);
    })
    .to('.section-projets .illustration', {
      delay: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
    });
}
