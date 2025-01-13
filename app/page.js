"use client";

import React, { useState, useEffect } from "react";
import Filter from "./filter";
import Item from "../components/Item";
import ButtonWithIcon from "../components/Button";
import Detail from "../components/Detail";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeItem, setActiveItem] = useState();
  const [secondaryActiveItem, setSecondaryActiveItem] = useState();
  const [isFilterOpened, setIsFilterOpen] = useState(false);

  useEffect(() => {
    fetch("https://mktideas.agency/wp-json/jet-cct/shop_item")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setFilteredItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    // Add or remove the 'no-scroll' class based on the filter popup state
    if (isFilterOpened) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    
    // Cleanup function to remove the class when component unmounts or updates
    return () => document.body.classList.remove("no-scroll");
  }, [isFilterOpened]);

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
    setIsFilterOpen(false);
  }

  function handleOpenFilter(open) {
    setIsFilterOpen(open);
  }

  

  return (
    <div className="bg-white">
      <main className="grid md:grid-cols-[1fr_2fr] md:p-10 p-6">
        <div className="sticky top-6 h-max hidden md:block">
          <Filter onApplyFilterClick={handleApplyFilterClick}></Filter>
        </div>

        <ButtonWithIcon
          onOpenFilterClick={() => handleOpenFilter(true)}
        ></ButtonWithIcon>

        <div
          className={`fixed inset-0 bg-white p-6 z-50 overflow-y-auto transition-transform transform ${
            isFilterOpened ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <Filter
            onCloseFilterClick={handleOpenFilter}
            onApplyFilterClick={handleApplyFilterClick}
          ></Filter>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-7 md:gap-y-16">
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
