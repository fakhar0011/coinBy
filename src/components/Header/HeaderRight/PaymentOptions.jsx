import React from "react";
import { FaEthereum, FaCreditCard } from "react-icons/fa";

const PaymentOptions = () => (
  <div className="flex flex-col sm:flex-row gap-2">
    <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e1b2e] border border-gray-600 rounded-md px-3 py-2 hover:border-purple-500 transition">
      <FaEthereum /> Eth
    </button>
    <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e1b2e] border border-gray-600 rounded-md px-3 py-2 hover:border-purple-500 transition">
      ETH
    </button>
    <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e1b2e] border border-gray-600 rounded-md px-3 py-2 hover:border-purple-500 transition">
      <FaCreditCard /> Credit Card
    </button>
  </div>
);

export default PaymentOptions;
