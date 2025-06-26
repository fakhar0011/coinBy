import React from "react";
const ProgressBar = () => (
  <div>
    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
      <div className="h-full bg-purple-500" style={{ width: "0.025%" }}></div>
    </div>
    <div className="text-xs flex justify-between text-gray-400 mt-1">
      <span>Raised: 250 USDT</span>
      <span>Goal: 1,000,000 USDT</span>
    </div>
    <div className="text-xs text-gray-400 mt-1">
      Tokens Sold: 2,500.00 | Total Tokens: 5,000,000,000.00
    </div>
  </div>
);

export default ProgressBar;
