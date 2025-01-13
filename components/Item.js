"use client";

import React, { useState, useEffect } from "react";
import CustomCarousel from "./Carousel";
import Detail from "./Detail";
import Colors from "./Colors";
import Image from "next/image";
import Forms2 from "./FormsShop";

function Item({ data, active, onItemClick, itemKey, secondaryActive }) {
  const [activeColor, setCurrentColor] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [photos, setCurrentPhotos] = useState(
    data.colors["item-0"].photos.split(",")
  );

  //Popup para el formulario
  const [isOpenForms, setIsOpenForms] = useState(false);
  const openForms = () => setIsOpenForms(true);
  const closeForms = () => setIsOpenForms(false);
  // Manejador para cerrar el modal al hacer clic fuera
  const handleClickOutside = (e) => {
    //Cierra el modal si haces clic en el fondo (id="popup")
    if (e.target.id === "popup") {
      closeForms();
      console.log("hiciste click fuera");
    }
  };

  const [currentCarousel, setCurrentCarousel] = useState(0); // Use useState for currentCarousel
  const [isLoading, setIsLoading] = useState(false);

  const handleDotClick = (index) => {
    setIsLoading(true); // Mostrar GIF de carga

    setTimeout(() => {
      const photosArray = getPhotos(index);
      setCurrentPhotos(photosArray);
      if (photosArray.length < getPhotos(currentCarousel).length) {
        setCurrentImage(0);
      }
      setCurrentCarousel(index);
      setCurrentColor(index);

      setIsLoading(false); // Ocultar GIF de carga
    }, 500); // Simular tiempo de carga
  };

  function getPhotos(index) {
    return data.colors["item-" + index].photos.split(",");
  }

  // Conditional rendering with proper return statements
  if (active) {
    return (
      <div className="md:col-span-2 sm:col-span-1 flex md:flex-row flex-col bg-[#F6F6F6] justify-center">
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center w-[30rem] h-[30rem] bg-[#F6F6F6] ">
              <img
                src="./loading.gif"
                alt="Loading"
                className="w-12 h-12 bg-[#F6F6F6]"
              />
            </div>
          ) : (
            <CustomCarousel images={photos}></CustomCarousel>
          )}
        </div>

        <div className="w-[25rem] md:bg-white bg-[#E5E5E5] flex flex-col justify-center p-8">
          <div className="font-founders-grotesk font-bold text-[1.5rem] flex gap-5">
            {data.name}
            <Colors
              colors={data.colors}
              onClickHandle={handleDotClick}
              activeColor={activeColor}
              small={true}
            ></Colors>
          </div>
          <div className="font-founders-grotesk mt-4">{data.description}</div>
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

          <button
            className="font-founders-grotesk font-bold border-[2px] border-black rounded-[25px] p-2 m-10 hover:bg-black hover:text-white"
            onClick={openForms}
          >
            Solicitar Cotización
          </button>
          {isOpenForms && (
            <div
              id="popup"
              className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10"
              onClick={handleClickOutside} // Cierra al hacer clic en el fondo
            >
              <div
                className="bg-white p-8 rounded-lg relative z-20" // Aseguramos que el contenido esté sobre el fondo
                onClick={(e) => e.stopPropagation()} // Previene el cierre al hacer clic en el contenido del modal
              >
                <Forms2
                  itemName={data.name}
                  open={isOpenForms}
                  handleClose={closeForms}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else if (secondaryActive) {
    return (
      <div className="md:col-span-2 sm:col-span-1 flex  flex-col justify-center">
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center h-[30rem] bg-[#F6F6F6] ">
              <img
                src="./loading.gif"
                alt="Loading"
                className="w-12 h-12 bg-[#F6F6F6]"
              />
            </div>
          ) : (
            <CustomCarousel images={photos}></CustomCarousel>
          )}
        </div>

        <div className="flex justify-between pt-3 md:pt-6">
          <div>
            <button
              onClick={() => onItemClick(itemKey)}
              className="transition-all hover:tracking-wider font-founders-grotesk font-bold  flex items-center gap-3"
            >
              {data.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65.757"
                height="5.429"
                viewBox="0 0 65.757 5.429"
              >
                <g
                  id="Grupo_19"
                  data-name="Grupo 19"
                  transform="translate(-337.5 -1873.25)"
                >
                  <g
                    id="Grupo_5"
                    data-name="Grupo 5"
                    transform="translate(-364 2812.75) rotate(-90)"
                  >
                    <line
                      id="Línea_1"
                      data-name="Línea 1"
                      y2="65.5"
                      transform="translate(939 701.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="1"
                    />
                    <line
                      id="Línea_2"
                      data-name="Línea 2"
                      x2="4.5"
                      y2="7.5"
                      transform="translate(934.5 759.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="1"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <Colors
            colors={data.colors}
            onClickHandle={handleDotClick}
            activeColor={activeColor}
            small={false}
          ></Colors>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer transition-all duration-500 ease-in-out">
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center h-[30rem] bg-[#F6F6F6] ">
              <img
                src="./loading.gif"
                alt="Loading"
                className="w-12 h-12 bg-[#F6F6F6]"
              />
            </div>
          ) : (
            <CustomCarousel images={photos}></CustomCarousel>
          )}
        </div>

        <div className="flex justify-between pt-3 md:pt-6">
          <div>
            <button
              onClick={() => onItemClick(itemKey)}
              className="transition-all hover:tracking-wider font-founders-grotesk font-bold flex items-center gap-3"
            >
              {data.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65.757"
                height="5.429"
                viewBox="0 0 65.757 5.429"
              >
                <g
                  id="Grupo_19"
                  data-name="Grupo 19"
                  transform="translate(-337.5 -1873.25)"
                >
                  <g
                    id="Grupo_5"
                    data-name="Grupo 5"
                    transform="translate(-364 2812.75) rotate(-90)"
                  >
                    <line
                      id="Línea_1"
                      data-name="Línea 1"
                      y2="65.5"
                      transform="translate(939 701.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="1"
                    />
                    <line
                      id="Línea_2"
                      data-name="Línea 2"
                      x2="4.5"
                      y2="7.5"
                      transform="translate(934.5 759.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="1"
                    />
                  </g>
                </g>
              </svg>
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
