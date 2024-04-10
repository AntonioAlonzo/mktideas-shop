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

export default function Filter({ onApplyFilterClick }) {
  const TYPES = [
    { label: "Todo", value: "todo" },
    { label: "Envases", value: "envase" },
    { label: "Bolsas", value: "bolsa" },
    { label: "Velas", value: "vela" },
    { label: "Papelería", value: "papeleria" },
    { label: "Editorial", value: "editorial" },
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
        setTypes(["todo", "envase", "bolsa", "vela", "papeleria", "editorial"]);
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
    <div className="md:block hidden">
      <p className="uppercase font-bold">Filtros y clasificación</p>
      <List>
        <p className="font-bold">Tipo de producto</p>
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
              <Typography color="blue-gray" className="font-medium">
                {type.label}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>

      <List>
        <p className="font-bold">Material</p>
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
              <Typography color="blue-gray" className="font-medium">
                {material.label}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>

      <div className="flex flex-row gap-x-6 pt-6">
        <Button
          className="normal-case"
          variant="outlined"
          onClick={handleDeleteAllClick}
        >
          Borrar todo
        </Button>
        <Button
          className="normal-case"
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
