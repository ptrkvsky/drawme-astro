import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

const tlMenu = gsap.timeline();
const emojiString = "DЯΛЩ MΞ Δ ƧΗΣΣР";
const emojis = emojiString.split(" "); // Splits the sentence into an array of individual characters

gsap.registerPlugin(ScrambleTextPlugin);

/**
 * Gets the animation for the menu.
 *
 * @param splitLink - The SplitText instance for menu text animation.
 * @returns The menu animation timeline.
 */
export function getMenuAnimation(splitLink: SplitText): gsap.core.Timeline {
  // fadein menu
  tlMenu
    .fromTo(
      "#wrapper-menu .content",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
        ease: "back.inOut",
      }
    )
    .addLabel("reveal");
  // animate lines
  tlMenu.from(
    "#wrapper-menu .line",
    {
      scaleX: 0,
      stagger: 0.25,
      ease: "power1.inOut",
      duration: 0.5,
    },
    "reveal"
  );
  tlMenu.from(
    splitLink.lines,
    {
      y: 45,
      ease: "power1.out",
      skewY: 0,
      stagger: {
        amount: 0.25,
      },
      duration: 0.7,
      opacity: 0,
    },
    "reveal+=0.5"
  );
  // SCRAMBLE
  splitLink.lines.forEach((char, index) => {
    tlMenu.from(char, {
      scrambleText: emojis[index],
      duration: 0.25,
      delay: -0.1,
      stagger: 0.25,
    });
  });
  tlMenu.pause();

  return tlMenu;
}

/**
 * Gets the animation for the burger menu button to open.
 *
 * @returns The burger menu button open animation timeline.
 */
export function getBurgerAnimation(): gsap.core.Timeline {
  const tlBurger = gsap.timeline();

  tlBurger.addLabel("animate-button-open");
  // Animate top bar
  tlBurger.to(
    "#burger-open .line-1",
    {
      top: "33%",
      translateY: "-50%",
      rotate: "-45deg",
      duration: 0.1,
      ease: "power4.inOut",
    },
    "animate-button-open"
  );
  // Animate bottom bar
  tlBurger.to(
    "#burger-open .line-3",
    {
      bottom: "50%",
      rotate: "45deg",
      translateY: "-50%",
      duration: 0.1,
      ease: "power4.inOut",
    },
    "animate-button-open"
  );
  // hide bar 2
  tlBurger.to(
    "#burger-open .line-2",
    {
      scaleX: 0,
      duration: 0.1,
      ease: "power4.inOut",
    },
    "animate-button-open"
  );

  tlBurger.pause();

  return tlBurger;
}

/**
 * Handles the click event on the burger menu button.
 *
 * @param tlBurger - The timeline for the burger menu button animation.
 * @param tlMenu - The timeline for the menu animation.
 */
export function handleClickBurger(
  tlBurger: gsap.core.Timeline,
  tlMenu: gsap.core.Timeline
) {
  const wrapperMenu = document.querySelector("#wrapper-menu");
  if (!wrapperMenu) return;
  if (wrapperMenu.classList.contains("is-open")) {
    tlBurger.reverse();
    tlMenu.reverse();
  } else {
    tlBurger.play(0);
    tlMenu.play(0);
  }
  wrapperMenu.classList.toggle("is-open");
}

/**
 * Scrambles and modifies the text content of elements with a "data-txt-origin" attribute.
 * This function uses GSAP to animate text scrambling and optionally modify the text content.
 */
export function scrambleMenu() {
  const elementsWithDataAttribute: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll("[data-txt-origin]");

  elementsWithDataAttribute.forEach((element) => {
    // Access the original text using the data attribute
    const originalText = element.dataset.txtOrigin;

    // Do something with the original text (example: console log)
    gsap.to(element, {
      duration: 1,
      scrambleText: {
        text: originalText ?? "",
        chars: "XO",
        revealDelay: 0.5,
        speed: 0.3,
      },
    });

    // You can also modify the element's text content or perform other actions here.
    // For example, to set the text content to uppercase:
    element.textContent = originalText?.toUpperCase() ?? "";
  });
}
