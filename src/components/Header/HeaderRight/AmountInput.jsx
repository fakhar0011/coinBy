import React from "react";
const AmountInput = ({ amount, setAmount }) => (
  <>
    <input
      type="number"
      placeholder="Enter amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-md px-3 py-2 mt-1 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <div className="text-xs text-gray-400 mt-1">0.00000 USD (0.00000 ETH)</div>
  </>
);

export default AmountInput;
