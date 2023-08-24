"use client";

import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function Filter() {
  const TYPES = [
    "Todo",
    "Envases",
    "Bolsas",
    "Velas",
    "Papelería",
    "Editorial",
  ];
  const MATERIALS = [
    "Fibras orgánicas",
    "Vidrio",
    "Madera",
    "Orgánicos",
    "Papel",
    "Metal",
  ];

  return (
    <div>
      <p className="uppercase font-bold">Filtros y clasificación</p>
      <List>
        <p className="font-bold">Tipo de producto</p>
        {TYPES.map((type) => (
          <ListItem className="p-0">
            <label
              htmlFor={"vertical-list-" + type}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={"vertical-list-" + type}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {type}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>

      <List>
        <p className="font-bold">Material</p>
        {MATERIALS.map((material) => (
          <ListItem className="p-0">
            <label
              htmlFor={"vertical-list-" + material}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={"vertical-list-" + material}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {material}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
