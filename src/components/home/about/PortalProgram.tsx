import React from "react";
import { FaUsers, FaFire, FaLightbulb, FaRegStar, FaCheckCircle } from "react-icons/fa"; // Import icons

const PortalProgram = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-10 mb-5 text-center">Portal Tazakka</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <TazakkaProComponent />
        <TazakkaCatalystComponent />
        <TazakkaVentureBuilderComponent />
        <TazakkaConnectComponent />
        <TazakkaExclusiveClubComponent />
      </div>
    </>
  );
};

const TazakkaProComponent = () => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <FaCheckCircle className="text-white" />
      </div>
      <h3 className="text-xl font-bold">Tazakka PRO</h3>
    </div>
    <p className="text-gray-600">Aplikasi dinamis yang memungkinkan para anggota untuk berinteraksi, berbagi wawasan, serta saling membantu melalui mentoring dan diskusi bisnis.</p>
  </div>
);

const TazakkaCatalystComponent = () => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <FaFire className="text-white" />
      </div>
      <h3 className="text-xl font-bold">Tazakka Catalyst</h3>
    </div>
    <p className="text-gray-600">Platform kolaborasi yang mempertemukan anggota dengan peluang usaha dan jaringan yang relevan untuk mempercepat pertumbuhan bisnis.</p>
  </div>
);

const TazakkaVentureBuilderComponent = () => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <FaLightbulb className="text-white" />
      </div>
      <h3 className="text-xl font-bold">Tazakka Venture Builder</h3>
    </div>
    <p className="text-gray-600">Kurasi bisnis yang siap berkembang secara nasional dan internasional, terutama bagi usaha yang telah terbukti, product-market fit dan sustainable.</p>
  </div>
);

const TazakkaConnectComponent = () => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <FaUsers className="text-white" />
      </div>
      <h3 className="text-xl font-bold">Tazakka Connect</h3>
    </div>
    <p className="text-gray-600">Membuka kesempatan bagi anggota untuk bersilaturahmi dengan pengusaha senior dan tokoh bisnis yang biasanya sulit diakses.</p>
  </div>
);

const TazakkaExclusiveClubComponent = () => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <FaRegStar className="text-white" />
      </div>
      <h3 className="text-xl font-bold">Tazakka Exclusive Club</h3>
    </div>
    <p className="text-gray-600">
      Program eksklusif bagi anggota dengan skala usaha besar (di atas 100 karyawan dan balance sheet di atas Rp 10 miliar) untuk menyusun roadmap agar dapat mencapai Top 100 orang terkaya di Indonesia pada 2045.
    </p>
  </div>
);

export default PortalProgram;
