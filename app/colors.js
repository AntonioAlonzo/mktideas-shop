import { useState } from "react";

export default function Colors({ colors, onClickHandle, activeColor }) {
  const COLORS = Object.entries(colors);

  return (
    <div className="indicator md:space-x-5 space-x-3">
      {COLORS.map((color, index) => (
        <button
          style={{ backgroundColor: color[1].color_code }}
          className={
            (activeColor == index ? "opacity-100" : "opacity-30") +
            " md:w-5 md:h-5 w-3 h-3 rounded-full outline-1 outline outline-offset-2 outline-black"
          }
          key={index}
          onClick={() => onClickHandle(index)}
        ></button>
      ))}
    </div>
  );
}
