import React from "react";
const TokenStats = () => (
  <div className="text-sm text-gray-300 pt-2 border-t border-gray-700">
    <div className="grid grid-cols-2 gap-y-2 bg-[#1a1a1a] p-4 rounded-md mt-3">
      <div className="font-semibold">Token Price:</div>
      <div className="text-right text-white">0.10600 USDT</div>
      <div className="font-semibold">Next Stage Price:</div>
      <div className="text-right text-white">0.108 USDT</div>
      <div className="font-semibold">Min Purchase:</div>
      <div className="text-right text-white">50 USDT</div>
      <div className="font-semibold">Max Purchase:</div>
      <div className="text-right text-white">50,000 USDT</div>
    </div>
    <div className="text-sm font-semibold text-white text-center pt-4">
      Claimable Amount: <span className="text-white font-normal">0</span>
    </div>
  </div>
);

export default TokenStats;
