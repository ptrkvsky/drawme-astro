import { gsap } from 'gsap';
import { AnimatableProperties } from '../Menu.interfaces';
import MenuItem from './menuItem';

export default class Menu {
  DOM: {
    menuItems: NodeListOf<Element>;
    el: Element;
  };
  animatableProperties: AnimatableProperties;
  menuItems: any[];

  constructor(el: Element) {
    // el is the menu element (<nav>)
    //@ts-ignore
    this.DOM = {
      el: el,
      menuItems: document.querySelectorAll('.menu__item'),
    };

    // menu item properties that will animate as we move the mouse around the menu
    // we will be using interpolation to achieve smooth animations.
    // the “previous” and “current” values are the values to interpolate.
    // the value applied to the element, this case the image element (this.DOM.reveal) will be a value between these two values at a specific increment.
    // the amt is the amount to interpolate.
    this.animatableProperties = {
      // translationX
      tx: { previous: 0, current: 0, amt: 0.08 },
      // translationY
      ty: { previous: 0, current: 0, amt: 0.08 },
      // Rotation angle
      rotation: { previous: 0, current: 0, amt: 0.08 },
      // CSS filter (brightness) value
      brightness: { previous: 1, current: 1, amt: 0.08 },
    };
    // array of MenuItem instances
    this.menuItems = [];
    // initialize the MenuItems
    [...this.DOM.menuItems].forEach((item, pos) =>
      this.menuItems.push(new MenuItem(item, pos, this.animatableProperties))
    );
    // show the menu items (initial animation where each menu item gets revealed)
    this.showMenuItems();
  }
  // initial animation for revealing the menu items
  showMenuItems() {
    gsap.to(
      this.menuItems.map((item) => item.DOM.textInner),
      {
        duration: 1.2,
        ease: 'Expo.easeOut',
        startAt: { y: '100%' },
        y: 0,
        delay: (pos) => pos * 0.06,
      }
    );
  }
}
