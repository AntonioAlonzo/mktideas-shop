import { useState } from "react";

export default function Colors({ colors, onClickHandle, activeColor, small }) {
  const COLORS = Object.entries(colors);

  return (
    <div className={"indicator " + (small ? "space-x-3 md:space-x-4" : "space-x-3 md:space-x-5") + "  flex "}>
      {COLORS.map((color, index) => (
        <button
          style={{ backgroundColor: "#" + color[1].color_code }}
          className={
            (activeColor == index ? "opacity-100" : "opacity-30") +
            (small ? "w-3 h-3 md:w-3 md:h-3 mt-2" : " w-3 h-3 md:w-4 md:h-4") +
            "   rounded-full outline-1 outline outline-offset-2 outline-black"
          }
          key={index}
          onClick={() => onClickHandle(index)}
        ></button>
      ))}
    </div>
  );
}
