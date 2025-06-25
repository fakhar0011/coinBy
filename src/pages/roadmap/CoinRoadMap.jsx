import React from "react";
import { FaCheck } from "react-icons/fa";

const roadmapItems = [
  { id: "01", quarter: "Q2 2025", title: "Whitepaper & Token Launch", percent: "0%" },
  { id: "02", quarter: "Q3 2025", title: "Private & Public Sales", percent: "20%" },
  { id: "03", quarter: "Q4 2025", title: "Beta Marketplace Launch", percent: "40%" },
  { id: "04", quarter: "Q1 2026", title: "Full Platform Launch", percent: "60%" },
  { id: "05", quarter: "Q2 2026", title: "Staking & Governance", percent: "80%" },
  { id: "06", quarter: "Q3 2026", title: "Logistics Integration", percent: "90%" },
  { id: "07", quarter: "Q4 2026", title: "Strategic Expansion", percent: "100%" },
];

const Roadmap = () => {
  return (
    <section className="bg-[#0d0016] py-20 px-4 text-white font-[Orbitron]">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">COINBAY ROADMAP</h2>

      <div className="relative max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-y-14">
        {/* Vertical Dashed Line */}
        <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l-2 border-dashed border-pink-600 z-0" />

        {roadmapItems.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative z-10 px-4 md:px-0 flex ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="w-full max-w-xs">
                {/* Quarter */}
                <p className="text-purple-400 text-sm mb-1">{item.quarter}</p>

                {/* Card */}
                <div className="bg-[#141014] rounded-lg px-4 py-3 flex justify-between items-center">
                  <div className="flex items-start gap-2">
                    {/* ID badge */}
                    <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">
                      {item.id}
                    </div>
                    <div className="text-sm font-semibold leading-snug">
                      {item.title}
                    </div>
                  </div>

                  {/* Progress badge */}
                  <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {item.percent}
                  </div>
                </div>
              </div>

              {/* Center Check Icon */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 p-1.5 rounded-full z-20">
                <FaCheck className="text-white text-sm" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Roadmap;
