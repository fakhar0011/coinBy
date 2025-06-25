import React from "react";
import { FaStar, FaSearch, FaCheckCircle, FaEnvelope } from "react-icons/fa";

const visionItems = [
  {
    icon: <FaStar size={22} />,
    title: "Secure Transactions",
    description:
      "Our blockchain technology ensures the highest level of security for all your digital asset transactions.",
  },
  {
    icon: <FaSearch size={22} />,
    title: "Innovative Technology",
    description:
      "We’re constantly pushing the boundaries of what’s possible in the digital asset space.",
  },
  {
    icon: <FaCheckCircle size={22} />,
    title: "Community Driven",
    description:
      "CoinBay is built by the community, for the community. Your voice matters in shaping our future.",
  },
  {
    icon: <FaEnvelope size={22} />,
    title: "Global Accessibility",
    description:
      "Access your digital assets from anywhere in the world with our seamless and user-friendly platform.",
  },
];

const Vision = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron]">OUR VISION</h2>
        <p className="text-purple-500 mt-2 font-semibold tracking-widest">
          THE FUTURE OF COINBAY
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {visionItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-[#222] rounded-lg p-6 flex gap-4 items-start hover:shadow-purple-600/20 hover:shadow-lg transition"
          >
            <div className="bg-[#ff00ff] text-white p-3 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold font-[Orbitron] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
