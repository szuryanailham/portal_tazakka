"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselItem from "./carouselItems";
import Autoplay from "embla-carousel-autoplay";

export function CarouselBanner() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 p-4 text-center bg-white">
          <CarouselItem />
        </div>
        <div className="flex-[0_0_100%] min-w-0 p-4 text-center bg-white">
          <CarouselItem />
        </div>
        <div className="flex-[0_0_100%] min-w-0 p-4 text-center bg-white">
          <CarouselItem />
        </div>
      </div>
    </div>
  );
}
