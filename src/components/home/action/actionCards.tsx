import Badge from "@/components/badge";
import React from "react";
function actionCards() {
  return (
    <div className="w-full flex flex-col md:flex-row p-10 gap-5">
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 bg-slate-100 p-10 rounded-lg shadow-lg h-fit">
        <div className="mb-4">
          <Badge text="Nasehat Kyai" color="bg-green-600" />
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

export default actionCards;
