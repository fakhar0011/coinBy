import React from "react";
const NetworkSelector = ({ selectedChain, setSelectedChain }) => (
  <div>
    <label className="block text-sm text-gray-300 mb-1">Select Network:</label>
    <select
      value={selectedChain}
      onChange={(e) => setSelectedChain(e.target.value)}
      className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none"
    >
      <option value="ethereum">Ethereum</option>
      <option value="bsc">Binance Smart Chain</option>
      <option value="solana">Solana</option>
    </select>
  </div>
);

export default NetworkSelector;
