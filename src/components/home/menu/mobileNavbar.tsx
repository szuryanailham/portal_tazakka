import React from "react";
import { FaInfoCircle, FaRegBuilding, FaBlog, FaPhone } from "react-icons/fa";

function BottomNavbar() {
  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-lg p-4 sm:p-6 flex justify-around items-center text-center">
      {/* Navbar Items */}
      <div className="flex flex-col items-center text-gray-600">
        <FaInfoCircle size={24} />
        <span className="mt-2 text-xs sm:text-sm">About</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaRegBuilding size={24} />
        <span className="mt-2 text-xs sm:text-sm">Program</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaBlog size={24} />
        <span className="mt-2 text-xs sm:text-sm">Blog</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaPhone size={24} />
        <span className="mt-2 text-xs sm:text-sm">Contact</span>
      </div>
    </div>
  );
}

export default BottomNavbar;
