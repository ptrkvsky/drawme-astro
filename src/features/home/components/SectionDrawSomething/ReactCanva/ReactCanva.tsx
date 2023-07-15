import React from 'react';
import { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { useCanvasResize, useSendEmail } from './ReactCanva.hooks';
import './ReactCanva.style.scss';

const ReactCanva = () => {
  const refCanvas = useRef<CanvasDraw | null>();
  const { data, isLoading, error, send } = useSendEmail();
  const canvasHeight: number = useCanvasResize();

  function undo() {
    refCanvas.current?.undo();
  }

  return (
    <>
      <CanvasDraw
        ref={(canvasDraw) => (refCanvas.current = canvasDraw)}
        backgroundColor={'#272729'}
        brushColor={'#00F9DF'}
        canvasHeight={canvasHeight}
        canvasWidth="1920"
        hideInterface={false}
      />

      <div className="wrapper-button">
        <div className="relative container">
          <button className="section-draw-button" onClick={undo}>
            Undo
          </button>
          {!data?.response ? (
            <button
              onClick={() => send(refCanvas.current?.getDataURL())}
              className="section-draw-button"
              type="button"
              disabled={isLoading}
            >
              Send me your artwork or your dick &gt;
            </button>
          ) : (
            <button className="section-draw-button success">Thank you !</button>
          )}
        </div>
      </div>
    </>
  );
};

export default ReactCanva;
