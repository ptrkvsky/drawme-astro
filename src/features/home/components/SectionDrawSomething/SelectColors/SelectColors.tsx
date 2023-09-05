import React from "react";

interface SelectColorsProps {
  setColors: (value: string) => void;
}

export default function SelectColors({ setColors }) {
  return (
    <div className="wrapper-select-colors">
      <img
        onClick={() => setColors("#07ffb9")}
        src="https://drawme-astro.vercel.app/_image/067639ad75ad9896dfff5bf52cf5e8346e6883bf-121x144-Z2g1d54_121x144.avif"
      />
      <img
        onClick={() => setColors("#FFF")}
        src="https://drawme-astro.vercel.app/_image/40813705c8a19d92a02b6018787c0ee23386b675-129x139-1isJnj_129x139.avif"
      />
    </div>
  );
}
