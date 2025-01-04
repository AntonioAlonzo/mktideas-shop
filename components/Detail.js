"use client";
import CustomCarousel from "./Carousel";

export default function Detail(props) {
  console.log(props);
  return <h1>{props.item.title}</h1>;
}
