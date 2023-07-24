import Swup from 'swup';
import { switchCanva } from './../components/SectionPresentation/SectionPresentation.animation';

export function animateHome(
  event: CustomEvent<{
    message: string;
    swup: Swup;
  }>
) {
  const { swup } = event.detail;

  swup.on('animationInDone', () => {
    console.log('animation in done ! go switch canva');
    switchCanva();
  });
}
