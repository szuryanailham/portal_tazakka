import React from "react";
import Image from "next/image";
import DummnyImage from "@/assets/sample.jpg";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
function BannerProgram() {
  return (
    <div className="w-full flex flex-col md:flex-row  gap-5">
      <Image className="w-full md:w-1/2 rounded-xl" src={DummnyImage} alt="Banner Program" />
      <div className="w-full md:w-1/2 bg-slate-100 p-10 rounded-lg shadow-lg h-fit">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-600">Tazakka Cetak Generasi Pemimpin Umat</h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur iure sequi quasi libero, nulla temporibus possimus at sint, optio harum ratione, assumenda tempore dicta quidem nisi. Quaerat aspernatur corporis facilis
          dolore rerum? Laboriosam aspernatur deserunt deleniti exercitationem vitae ipsam.
        </p>
        <motion.button
          className="mt-[100px] w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md  flex items-center justify-center"
          whileHover={{
            y: -4, // Slight lift on hover
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.98 }} // Button shrinks a bit on tap
        >
          <FiUser size={20} className="mr-2" /> {/* Icon with margin */}
          Daftar
        </motion.button>
      </div>
    </div>
  );
}

export default BannerProgram;
