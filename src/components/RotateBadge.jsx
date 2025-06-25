import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const RotatingBadge = () => {
  return (
    <div className="relative w-36 h-36 rounded-full bg-white p-0.2"> {/* outer transparent border */}
      <div className="relative w-full h-full rounded-full bg-black">
        {/* Rotating Circle with Text */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="
                  M 50, 50
                  m -40, 0
                  a 40,40 0 1,1 80,0
                  a 40,40 0 1,1 -80,0
                "
              />
            </defs>
            <text
              fill="white"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="8"
              textAnchor="middle"
            >
              <textPath href="#circlePath" startOffset="75%">
                Since ✦ 2019 NFTportfolio ✦
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Gradient Circle with Arrow */}
        <div className="absolute inset-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-inner">
          <FiArrowUpRight className="text-white text-xl rotate-[-30deg]" />
        </div>
      </div>
    </div>
  );
};

export default RotatingBadge;
