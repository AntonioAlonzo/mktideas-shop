"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Filter from "./filter";
import Item from "./item";
import { Checkbox } from "@material-tailwind/react";

export default function Home() {
  const CATEGORIES = [];
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
    <div className="bg-white">
      <main className="w-11/12 grid grid-cols-[1fr_2fr] p-10">
        <div>
          <Filter></Filter>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-16">{itemList}</div>
      </main>
    </div>
  );
}
