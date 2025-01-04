"use client";

import React, { useState, useEffect } from "react";
import CustomCarousel from "./Carousel";
import Detail from "./Detail";
import Colors from "./Colors";

function Item({ data, active, onItemClick, itemKey, secondaryActive }) {
  const [activeColor, setCurrentColor] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [photos, setCurrentPhotos] = useState(
    data.colors["item-0"].photos.split(",")
  );
  const [currentCarousel, setCurrentCarousel] = useState(0); // Use useState for currentCarousel

  const handleDotClick = (index) => {
    let photosArray = getPhotos(index);
    setCurrentPhotos(photosArray);
    if (photosArray.length < getPhotos(currentCarousel).length) {
      setCurrentImage(0);
    }
    setCurrentCarousel(index); // Set carousel state
    setCurrentColor(index);
  };

  function getPhotos(index) {
    return data.colors["item-" + index].photos.split(",");
  }

  // Conditional rendering with proper return statements
  if (active) {
    return (
      <div className="col-span-2 flex bg-[#F6F6F6] justify-center">
        <div className="">
          <CustomCarousel images={photos}></CustomCarousel>
        </div>

        <div className="w-[25rem] bg-white flex flex-col justify-center p-8">
          <div className="font-founders-grotesk font-bold text-[1.5rem]">
            {data.name}
          </div>
          <div className="font-founders-grotesk">{data.description}</div>
          <div className="font-founders-grotesk mt-6">
            <b>Dimensiones:</b> {data.dimensiones}
          </div>

          <p className="font-founders-grotesk font-bold mt-2">
            Técnicas de impresión
          </p>
          <div className="font-founders-grotesk">
            {data.tecnica_impresion.map((value) => {
              switch (value) {
                case "serigrafia":
                  return <div>- Serigrafía</div>;
                case "tampografia":
                  return <div>- Tampografía</div>;
                case "grabado_laser":
                  return <div>- Grabado Láser</div>;
                default:
                  return null;
              }
            })}
          </div>

          <button className="font-founders-grotesk font-bold border-[2px] border-black rounded-[25px] p-2 m-10 hover:bg-black hover:text-white">Solicitar Cotización</button>
        </div>
      </div>
    );
  } else if (secondaryActive) {
    return (
      <div className="col-span-2 flex  flex-col justify-center">
        <div>
          <CustomCarousel images={photos}></CustomCarousel>
        </div>

        <div className="flex justify-between pt-3 md:pt-6">
          <div>
            <button
              onClick={() => onItemClick(itemKey)}
              className="transition-all hover:tracking-wider font-founders-grotesk font-bold"
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
  } else {
    return (
      <div>
        <div>
          <CustomCarousel images={photos}></CustomCarousel>
        </div>

        <div className="flex justify-between pt-3 md:pt-6">
          <div>
            <button
              onClick={() => onItemClick(itemKey)}
              className="transition-all hover:tracking-wider font-founders-grotesk font-bold"
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
}

export default Item;
