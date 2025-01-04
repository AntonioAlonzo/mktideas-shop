"use client";

import React, { useState, useEffect } from "react";
import Filter from "./filter";
import Item from "../components/Item";
import ButtonWithIcon from "../components/Button";
import Detail from "../components/Detail";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [activeItem, setActiveItem] = useState();
  const [secondaryActiveItem, setSecondaryActiveItem] = useState();

  useEffect(() => {
    fetch("https://mktideas.agency/wp-json/jet-cct/shop_item")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setFilteredItems(data);
        console.log(itemList);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleItemClick(itemID) {
    setActiveItem(itemID);

    if (itemID % 2 == 0) {
      setSecondaryActiveItem(itemID + 1);
    } else {
      setSecondaryActiveItem(itemID - 1);
    }
  }

  function handleApplyFilterClick(types, materials) {
    setActiveItem(null);
    setSecondaryActiveItem(null);
    setFilteredItems(
      items.filter((item) => {
        let filter = true;

        if (types.length) {
          filter = types.includes(item.type);
        }

        if (filter && materials.length) {
          filter = materials.includes(...item.material);
        }

        return filter;
      })
    );
  }

  return (
    <div className="bg-white">
      <main className="grid md:grid-cols-[1fr_2fr] md:p-10 p-6">
        <div>
          <Filter onApplyFilterClick={handleApplyFilterClick}></Filter>
        </div>

        <ButtonWithIcon></ButtonWithIcon>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 md:gap-y-16">
          {filteredItems.map((item, index) => {
            return (
              <Item
                key={item._ID}
                onItemClick={handleItemClick}
                active={activeItem == index}
                secondaryActive={secondaryActiveItem == index}
                data={item}
                itemKey={index}
              ></Item>
            );
          })}
        </div>
      </main>
    </div>
  );
}
