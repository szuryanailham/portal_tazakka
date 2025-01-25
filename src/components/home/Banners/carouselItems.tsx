"use client";
import React from "react";
import Image from "next/image";
import DummyCarouselDesktop from "@/assets/sample1.png";

function CarouselItem() {
  return (
    <div className="relative w-full p-2 h-[300px] md:h-screen sm:h-[400px] ">
      {/* Image */}
      <Image
        src={DummyCarouselDesktop}
        alt="Dummy Image"
        layout="fill"
        objectFit="cover" // Ensures the image covers the area without distortion
        className="rounded-lg"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Title */}
    </div>
  );
}

export default CarouselItem;
