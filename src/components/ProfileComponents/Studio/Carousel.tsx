"use client";
import { Carousel } from "flowbite-react";

export default function CarouselComponent() {
  return (
    <div className="h-[372px]">
      <Carousel indicators={false} slide={false} slideInterval={5000}>
        <img className="carousel_image" src="/Frame 30720.png" alt="..." />
        <img className="carousel_image" src="/Frame 30720.png" alt="..." />
        <img className="carousel_image" src="/Frame 30720.png" alt="..." />
      </Carousel>
    </div>
  );
}
