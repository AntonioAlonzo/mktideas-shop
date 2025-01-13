"use client";

import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Card,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function Filter({ onApplyFilterClick, onCloseFilterClick }) {
  const TYPES = [
    { label: "Todo", value: "todo" },
    { label: "Envases", value: "envase" },
    { label: "Bolsas", value: "bolsa" },
    { label: "Velas", value: "vela" },
    { label: "Papelería", value: "papeleria" },
    { label: "Editorial", value: "editorial" },
    { label: "Tecnología", value: "tecnologia" },
    { label: "Wellness", value: "wellness" },
  ];
  const MATERIALS = [
    { label: "Fibras orgánicas", value: "fibra-organica" },
    { label: "Vidrio", value: "vidrio" },
    { label: "Madera", value: "madera" },
    { label: "Orgánicos", value: "organico" },
    { label: "Papel", value: "papel" },
    { label: "Metal", value: "metal" },
  ];
  const [materials, setMaterials] = useState([]);
  const [types, setTypes] = useState([]);

  function handleTypeCheckbox(event, type) {
    if (event.target.checked) {
      if (type == "todo") {
        setTypes([
          "todo",
          "envase",
          "bolsa",
          "vela",
          "papeleria",
          "editorial",
          "tecnologia",
          "wellness",
        ]);
      } else {
        setTypes([...types, type]);
      }
    } else {
      if (type == "todo") {
        setTypes([]);
      } else {
        const updatedTypes = [...types];
        updatedTypes.splice(types.indexOf(type), 1);
        setTypes(updatedTypes);
      }
    }
  }

  function handleMaterialCheckbox(event, material) {
    if (event.target.checked) {
      setMaterials([...materials, material]);
    } else {
      const updatedMaterials = [...materials];
      updatedMaterials.splice(materials.indexOf(material), 1);
      setMaterials(updatedMaterials);
    }
  }

  function handleDeleteAllClick() {
    setTypes([]);
    setMaterials([]);
  }

  return (
    <div>
      <div className="flex items-center">
        <p className="uppercase font-bold">Filtros y clasificación</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5 md:hidden ml-3 cursor-pointer"
          onClick={() => onCloseFilterClick(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </svg>
      </div>

      <List>
        <p className="font-founders-grotesk font-bold">Tipo de producto</p>
        {TYPES.map((type, index) => (
          <ListItem className="p-0" key={index}>
            <label
              htmlFor={"vertical-list-" + type.label}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={"vertical-list-" + type.label}
                  /*
                  onClick={() => {
                    onTypeCheckboxClick(type.value);
                  }}*/
                  onChange={(event) => {
                    handleTypeCheckbox(event, type.value);
                  }}
                  /*
                  onClick={() => {
                    addToCategoryFilter(type.value);
                  }}
                  */
                  checked={types.includes(type.value)}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium font-founders-grotesk font-bold"
              >
                {type.label}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>

      <List>
        <p className=" font-founders-grotesk font-bold">Material</p>
        {MATERIALS.map((material, index) => (
          <ListItem className="p-0" key={index}>
            <label
              htmlFor={"vertical-list-" + material.label}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={"vertical-list-" + material.label}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  /*
                  onClick={onMaterialCheckboxClick}
                  */
                  onChange={(event) => {
                    handleMaterialCheckbox(event, material.value);
                  }}
                  /*
                  onClick={() => {
                    addToCategoryFilter(type.value);
                  }}
                  */
                  checked={materials.includes(material.value)}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium  font-founders-grotesk font-bold"
              >
                {material.label}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>

      <div className="flex flex-row gap-x-6 pt-6">
        <Button
          className="normal-case font-founders-grotesk"
          variant="outlined"
          onClick={handleDeleteAllClick}
        >
          Borrar todo
        </Button>
        <Button
          className="normal-case font-founders-grotesk"
          variant="outlined"
          onClick={() => {
            onApplyFilterClick(types, materials);
          }}
        >
          Aplicar
        </Button>
      </div>
    </div>
  );
}
