"use client";

import React, { useState, useEffect } from "react";
import Filter from "./filter";
import Item from "./item";
import ButtonWithIcon from "./button";
import Detail from "./detail";

export default function Home() {
  const [items, setItems] = useState([]);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("https://mktideas.agency/wp-json/jet-cct/shop_item")
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

  function handleItemClick() {}

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
          return (
            <Item
              key={item._ID}
              data={item}
              onItemClick={handleItemClick}
            ></Item>
          );
        })
    );
  }

  return (
    <div className=" bg-white">
      <main className="grid md:grid-cols-[1fr_2fr] md:p-10 p-6">
        <div>
          <Filter onApplyFilterClick={handleApplyFilterClick}></Filter>
        </div>

        <ButtonWithIcon></ButtonWithIcon>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 md:gap-y-16">
          {itemList}
        </div>
      </main>
    </div>
  );
}
