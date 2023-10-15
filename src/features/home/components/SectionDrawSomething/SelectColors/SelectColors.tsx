import React from "react";
import greenColor from "../../../../../assets/images/green-color.webp";
import whiteColor from "../../../../../assets/images/white-color.webp";

interface SelectColorsProps {
  setColors: (value: string) => void;
}

export default function SelectColors({ setColors }: SelectColorsProps) {
  return (
    <div className="wrapper-select-colors">
      <div className="o-hidden">
        <img
          className="color"
          alt="color"
          onClick={() => setColors("#07ffb9")}
          src={greenColor.src}
        />
      </div>
      <div className="o-hidden">
        <img
          className="color"
          alt="color"
          onClick={() => setColors("#FFF")}
          src={whiteColor.src}
        />
      </div>
    </div>
  );
}
