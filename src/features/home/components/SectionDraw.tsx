import { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

const SectionDraw = () => {
  const refCanvas = useRef<CanvasDraw | null>();

  return (
    <div className="section-draw overflow-visible">
      <h2>
        What would you draw <br /> for me ?
      </h2>
      {/* <button onClick={() => refCanvas.current?.clear()}>Clear</button>
      <button onClick={() => refCanvas.current?.undo()}>Annuler</button> */}
      <CanvasDraw
        ref={(canvasDraw) => (refCanvas.current = canvasDraw)}
        backgroundColor={'#000'}
        brushColor={'#FFF'}
        canvasHeight={800}
        canvasWidth="1920"
        hideInterface={false}
      />
      <div className="wrapper-button">
        <div className="relative container">
          <button className="button-send" type="button">
            Send me your artwork &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionDraw;
