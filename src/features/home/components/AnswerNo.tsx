import gsap from 'gsap';
import getRandomInt from '@helpers/getRandomInt';
import { useRef } from 'react';

const AnswerNo = () => {
  const refElement = useRef<HTMLElement>(null);

  const handleNoHover = () => {
    const elementWidth = refElement.current.offsetWidth;
    const elementHeight = refElement.current.offsetHeight;
    // /* Detect */
    const maxX = window.innerWidth - elementWidth;
    const maxY = window.innerHeight - elementHeight;

    const rightPos = getRandomInt(94, 24);

    gsap.to('#answer-no', {
      right: rightPos + 'rem',
      ease: 'Power4.out',
      duration: 0.3,
    });
  };

  return (
    <span
      ref={refElement}
      id="answer-no"
      onMouseOver={handleNoHover}
      data-speed="0.98"
      data-lag="0.02"
      className="no"
      style={{ position: 'absolute', fontSize: '3rem', right: '74rem' }}
    >
      No
    </span>
  );
};

export default AnswerNo;
