"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Item from "./item";

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://mktideas.com/wp-json/jet-cct/shop_item")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const itemList = items.map((item) => {
    return <Item key={item._ID} data={item}></Item>;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {itemList}
    </main>
  );
}
