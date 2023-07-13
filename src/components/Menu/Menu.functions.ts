import Menu from './scripts/menu';
import { preloader } from './scripts/preloader';

function menu() {
  if (window.innerWidth < 1025) return;

  const menuEl = document.querySelector('.menu');
  preloader('.menu__item').then(() => {
    // initialize custom cursor
    // new Cursor(document.querySelector('.cursor'));
    // initialize menu
    new Menu(menuEl);
  });
}

export function startMenu() {
  window.addEventListener('load', menu);
}
