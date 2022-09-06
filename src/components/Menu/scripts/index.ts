import Cursor from './cursor';
import { preloader } from './preloader';

import Menu from './menu';

// menu (<nav> element)
const menuEl = document.querySelector('.menu');

// preload the images set as data attrs in the menu items
preloader('.menu__item').then(() => {
  // initialize the smooth scroll

  // initialize custom cursor
  const cursor = new Cursor(document.querySelector('.cursor'));

  // initialize menu
  new Menu(menuEl);
});
