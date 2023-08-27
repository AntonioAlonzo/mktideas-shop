"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Filter from "./filter";
import Item from "./item";
import { Checkbox } from "@material-tailwind/react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("https://mktideas.com/wp-json/jet-cct/shop_item")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setItemList(
          data.map((item) => {
            return <Item key={item._ID} data={item}></Item>;
          })
        );
        console.log(itemList);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleApplyFilterClick(types, materials) {
    setItemList(
      items
        .filter((item) => {
          let filter = true;

          if (types.length) {
            filter = types.includes(item.type);
          }

          if (filter && materials.length) {
            filter = materials.includes(...item.material);
          }

          return filter;
        })
        .map((item) => {
          return <Item key={item._ID} data={item}></Item>;
        })
    );
  }

  /*
  function handleMaterialCheckboxClick() {
    console.log("Material");
  }
  */

  return (
    <div className="bg-white">
      <main className="w-11/12 grid grid-cols-[1fr_2fr] p-10">
        <div>
          <Filter onApplyFilterClick={handleApplyFilterClick}></Filter>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-16">{itemList}</div>
      </main>
    </div>
  );
}
