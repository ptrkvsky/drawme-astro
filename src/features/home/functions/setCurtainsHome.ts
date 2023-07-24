//@ts-ignore - curtainsjs does not support TS
import { Curtains } from 'curtainsjs';
import handleCurtainSuccess from '@features/project/functions/handleCurtainSuccess';

export function newCurtain(idContainer: string) {
  const container = document.getElementById(idContainer);

  if (container) {
    return new Curtains({
      container,
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
    });
  }
  return null;
}

export function setCurtainsHome() {
  if (!document.querySelector('#main-canva')) return;
  /**
   * BLACK
   */
  const curtainBlack = newCurtain('main-canva');

  const bgBlack = {
    r: 0,
    v: 0,
    b: 0,
  };

  curtainBlack.onSuccess(
    handleCurtainSuccess(curtainBlack, 'main-canva', 2.23, 2.875, bgBlack)
  );

  /**
   * WHITE
   */
  const curtainWhite = new Curtains({
    container: 'canva-white',
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  });

  const bgWhite = {
    r: 255,
    v: 255,
    b: 255,
  };

  curtainWhite.onSuccess(
    handleCurtainSuccess(curtainWhite, 'canva-white', 2.28, 0.5, bgWhite)
  );

  return {
    curtainBlack,
    curtainWhite,
  };
}
