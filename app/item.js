"use client";

import React, { useState, useEffect } from "react";
import CustomCarousel from "./carousel";

function Item({ data }) {
  const [activeImage, setCurrentImage] = useState(0);
  let currentCarousel = 0;
  const COLORS = Object.entries(data.colors);
  const [activeColor, setCurrentColor] = useState(0);
  const [photos, setCurrentPhotos] = useState(
    data.colors["item-0"].photos.split(",")
  );

  const handleDotClick = (index) => {
    let photosArray = getPhotos(index);
    setCurrentPhotos(photosArray);
    if (photosArray.length < getPhotos(currentCarousel).length) {
      setCurrentImage(0);
    }
    currentCarousel = index;
    setCurrentColor(index);
  };

  function getPhotos(index) {
    return data.colors["item-" + index].photos.split(",");
  }

  return (
    <div className="">
      <div>
        <CustomCarousel images={photos}></CustomCarousel>

        <div className="indicator">
          {/*photos.map((_, index) => (
            <button
              className={
                (activeImage == index ? "opacity-100" : "opacity-30") +
                " mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              }
              key={index}
              onClick={() => handleImageClick(index)}
            ></button>
            ))*/}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <div className="transition-all font-bold hover:tracking-wider">
          {data.name}
        </div>

        <div className="indicator space-x-5">
          {COLORS.map((color, index) => (
            <button
              style={{ backgroundColor: color[1].color_code }}
              className={
                (activeColor == index ? "opacity-100" : "opacity-30") +
                " w-5 h-5 rounded-full outline-1 outline outline-offset-2 outline-black"
              }
              key={index}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;
