import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

const ReactCanva = () => {
  const refCanvas = useRef<CanvasDraw | null>();

  const [canvasHeight, setCanvasHeight] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      const isMobileOrTablet = window.matchMedia('(max-width: 768px)').matches;
      if (isMobileOrTablet) {
        const screenHeight = window.innerHeight;
        setCanvasHeight(screenHeight / 2);
      } else {
        setCanvasHeight(800);
      }
    };

    // Écouteur d'événement pour redimensionner le canevas lorsque la taille de l'écran change
    window.addEventListener('resize', handleResize);

    // Appel initial pour définir la hauteur du canevas en fonction de la taille de l'écran actuelle
    handleResize();

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CanvasDraw
      ref={(canvasDraw) => (refCanvas.current = canvasDraw)}
      backgroundColor={'#272729'}
      brushColor={'#00F9DF'}
      canvasHeight={canvasHeight}
      canvasWidth="1920"
      hideInterface={false}
    />
  );
};

export default ReactCanva;
