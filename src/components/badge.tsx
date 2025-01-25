// components/Badge.tsx
import React from "react";

interface BadgeProps {
  text: string;
  color?: string; // Optional, defaults to blue
}

const Badge: React.FC<BadgeProps> = ({ text, color = "bg-blue-600" }) => {
  return <span className={`${color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>{text}</span>;
};

export default Badge;
