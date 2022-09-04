import gsap from 'gsap';

export function getMenuAnimation(splitLink: SplitText) {
  const tlMenu = gsap.timeline();
  // fadein menu
  tlMenu
    .fromTo(
      '#wrapper-menu .content',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
        ease: 'back.inOut',
      }
    )
    .addLabel('reveal');
  // animate lines
  tlMenu.from(
    '#wrapper-menu .line',
    {
      scaleX: 0,
      stagger: 0.25,
      ease: 'power1.inOut',
      duration: 0.75,
    },
    'reveal'
  );
  tlMenu.from(
    splitLink.lines,
    {
      y: 35,
      ease: 'power1.out',
      skewY: 0,
      stagger: {
        amount: 0.25,
      },
      duration: 0.65,
      opacity: 0,
    },
    'reveal+=0.5'
  );
  tlMenu.pause();

  return tlMenu;
}

export function getBurgerAnimation() {
  const tlBurger = gsap.timeline();

  tlBurger.addLabel('animate-button-open');
  // Animate top bar
  tlBurger.to(
    '#burger-open .line-1',
    {
      top: '33%',
      translateY: '-50%',
      rotate: '-45deg',
      duration: 0.1,
      ease: 'power4.inOut',
    },
    'animate-button-open'
  );
  // Animate bottom bar
  tlBurger.to(
    '#burger-open .line-3',
    {
      bottom: '50%',
      rotate: '45deg',
      translateY: '-50%',
      duration: 0.1,
      ease: 'power4.inOut',
    },
    'animate-button-open'
  );
  // hide bar 2
  tlBurger.to(
    '#burger-open .line-2',
    {
      scaleX: 0,
      duration: 0.1,
      ease: 'power4.inOut',
    },
    'animate-button-open'
  );

  tlBurger.pause();

  return tlBurger;
}

export function handleClickBurger(
  tlBurger: gsap.core.Timeline,
  tlMenu: gsap.core.Timeline
) {
  const wrapperMenu = document.querySelector('#wrapper-menu');
  if (wrapperMenu.classList.contains('is-open')) {
    tlBurger.reverse();
    tlMenu.reverse();
  } else {
    tlBurger.play(0);
    tlMenu.play(0);
  }
  wrapperMenu.classList.toggle('is-open');
}