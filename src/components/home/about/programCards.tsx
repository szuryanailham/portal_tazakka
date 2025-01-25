import React from "react";
import { motion } from "framer-motion";
import { SvgIconProps } from "@mui/material";

interface ProgramCardProps {
  icon: React.ElementType<SvgIconProps>;
  title: string;
  hoverColor: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon: Icon, title, hoverColor }) => {
  return (
    <motion.div whileHover={{ scale: 1.05, backgroundColor: hoverColor }} transition={{ duration: 0.3 }} className="w-full md:p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-8">
      <Icon className="text-gray-500 dark:text-gray-400 mb-3 " sx={{ fontSize: 64 }} />
      <a href="#">
        <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-700 dark:text-white">{title}</h5>
      </a>
    </motion.div>
  );
};

export default ProgramCard;
