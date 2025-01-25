"use client";
import React from "react";
import { motion, useScroll } from "framer-motion"; // Import necessary packages
import About from "@/components/home/about/about";
import ActionContain from "@/components/home/action/actionContain";
import { CarouselBanner } from "@/components/home/Banners/carouselBanner";
import ContainerBlogs from "@/components/home/blogs/containerBlogs";
import AlurPendaftaran from "@/components/home/pendaftaraan/alurPendaftaraan";
import Question from "@/components/home/pendaftaraan/question";

export default function Home() {
  const { scrollYProgress } = useScroll(); // Hook to track scroll position

  return (
    <div className="bg-white">
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress, // The scroll indicator will scale horizontally
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0, // The scaling will start from the left
          backgroundColor: "#5B913B", // Color for the progress bar
          zIndex: 9999, // Ensure the progress bar is above everything
        }}
      />
      <CarouselBanner />
      <About />
      <div>
        <h1 className="text-center text-gray-900 text-2xl md:text-4xl lg:text-5xl font-bold mt-10 p-2 mb-3 ">Tentang Pendaftaraan</h1>
        <div className="text-center mt-5 px-4 md:px-0 w-[80%] mx-auto text-gray-600 text-sm md:text-xl">
          Berikut adalah alur pendaftaran yang harus diikuti oleh calon santri baru. Untuk informasi lebih lanjut, silahkan unduh brosur pendaftaran dengan cara klik link berikut:
          <a href="/path/to/brosur.pdf" download className="text-red-900 underline ml-1">
            Klik di sini
          </a>
        </div>
        <div className="flex flex-col md:flex-row p-5 gap-5 bg-white">
          <div>
            <AlurPendaftaran />
          </div>
          <div className="flex-1">
            <Question />
          </div>
        </div>
      </div>
      <ActionContain />
      <ContainerBlogs />
    </div>
  );
}
