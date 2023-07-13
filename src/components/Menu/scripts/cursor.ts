// Importing required modules
import { gsap } from 'gsap';
import { lerp, getMousePos } from './utils';

// Track the mouse position
let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));

// Define Cursor class
export default class Cursor {
  DOM: {
    el: HTMLElement;
  };
  bounds: DOMRect;
  renderedStyles: {
    tx: { previous: number; current: number; amt: number };
    ty: { previous: number; current: number; amt: number };
  };
  onMouseMoveEv: () => void;

  constructor(el) {
    this.DOM = { el: el };
    this.DOM.el.style.opacity = `${0}`;
    this.bounds = this.DOM.el.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.2 },
      ty: { previous: 0, current: 0, amt: 0.2 },
    };

    // Event handler for mouse movement
    this.onMouseMoveEv = () => {
      // Update current and previous mouse positions
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
        mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
        mouse.y - this.bounds.height / 2;

      // Animate cursor opacity
      gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1,
      });

      // Call render function on each frame
      requestAnimationFrame(() => this.render());

      // Remove mousemove event listener after initialization
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };

    // Add mousemove event listener to initialize the cursor
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }

  // Render function to update cursor position and apply transform
  render() {
    this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      // Apply linear interpolation to smoothly update previous values
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    // Apply translation transform to cursor element
    this.DOM.el.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px)`;

    // Call render function on each frame
    requestAnimationFrame(() => this.render());
  }
}
