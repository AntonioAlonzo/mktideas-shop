"use client";

import React, { useState, useEffect } from "react";
import CustomCarousel from "./carousel";
import Detail from "./detail";
import Colors from "./colors";

function Item({ data }) {
  const [activeColor, setCurrentColor] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [photos, setCurrentPhotos] = useState(
    data.colors["item-0"].photos.split(",")
  );

  let currentCarousel = 0;

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
    <div>
      <div>
        <CustomCarousel images={photos}></CustomCarousel>
      </div>

      <div className="flex justify-between pt-3 md:pt-6">
        <div>
          <button
            onClick=""
            className="transition-all font-bold hover:tracking-wider"
          >
            {data.name}
          </button>
        </div>

        <Colors
          colors={data.colors}
          onClickHandle={handleDotClick}
          activeColor={activeColor}
        ></Colors>
      </div>
    </div>
  );
}

export default Item;
