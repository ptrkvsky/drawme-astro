import { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

const ReactCanva = () => {
  const refCanvas = useRef<CanvasDraw | null>();

  return (
    <CanvasDraw
      ref={(canvasDraw) => (refCanvas.current = canvasDraw)}
      backgroundColor={'#272729'}
      brushColor={'#00F9DF'}
      canvasHeight={800}
      canvasWidth="1920"
      hideInterface={false}
    />
  );
};

export default ReactCanva;
