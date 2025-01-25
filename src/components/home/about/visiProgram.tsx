import React from "react";
import Image from "next/image";
import DummnyImage from "@/assets/sample.jpg";
import Badge from "@/components/badge";
function visiProgram() {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse gap-5 mt-12">
      <Image className="w-full md:w-1/2 rounded-xl" src={DummnyImage} alt="Banner Program" />
      <div className="w-full md:w-1/2 bg-slate-100 p-10 rounded-lg shadow-lg h-fit">
        <div className="mb-4">
          <Badge text="Visi Misi" color="bg-green-600" />
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-600">Tazakka Cetak Generasi Pemimpin Umat</h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur iure sequi quasi libero, nulla temporibus possimus at sint, optio harum ratione, assumenda tempore dicta quidem nisi. Quaerat aspernatur corporis facilis
          dolore rerum? Laboriosam aspernatur deserunt deleniti exercitationem vitae ipsam.
        </p>
      </div>
    </div>
  );
}

export default visiProgram;
