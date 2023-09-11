import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useCanvasResize, useSendEmail } from "./ReactCanva.hooks";
import SelectColors from "../SelectColors/SelectColors";

const ReactCanva = () => {
  const refCanvas = useRef<CanvasDraw | null>();
  const [brushColor, setBrushColor] = useState("#00F9DF");
  const { data, isLoading, send } = useSendEmail();
  const canvasHeight: number = useCanvasResize();

  function undo() {
    refCanvas.current?.undo();
  }

  return (
    <>
      <CanvasDraw
        ref={(canvasDraw) => (refCanvas.current = canvasDraw)}
        backgroundColor={"#272729"}
        brushColor={brushColor}
        brushRadius={4}
        canvasHeight={canvasHeight}
        canvasWidth="1920"
        hideInterface={false}
      />

      <SelectColors setColors={setBrushColor} />

      <div className="wrapper-button">
        <div className="relative container">
          <button
            id="undo"
            className="section-draw-button split-text o-hidden"
            onClick={undo}
          >
            Undo
          </button>
          {!data?.response ? (
            <button
              onClick={() => send(refCanvas.current?.getDataURL())}
              className="section-draw-button split-text o-hidden"
              type="button"
              id="submit-draw"
              disabled={isLoading}
            >
              {isLoading
                ? "Your artistry is about to amaze the world"
                : "Share your artwork with me >"}
            </button>
          ) : (
            <button className="section-draw-button success">
              Grateful for your artistry!
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ReactCanva;
