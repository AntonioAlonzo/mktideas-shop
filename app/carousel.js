"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

export default function CustomCarousel({ images }) {
  return (
    <Carousel
      className="bg-[#F6F6F6] md:h-[30rem] h-[20rem]"
      prevArrow={0}
      nextArrow={0}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-[#707070]" : "w-4 bg-black/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="image 1"
          className="object-contain md:h-[30rem] h-[20rem] w-full"
        />
      ))}
    </Carousel>
    /*<img className="w-auto h-[26rem]" src={images[activeImage]}></img>*/
  );
}
