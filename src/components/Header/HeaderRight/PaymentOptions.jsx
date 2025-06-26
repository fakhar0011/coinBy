import React from "react";
import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiSolana } from "react-icons/si";

const PaymentOptions = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <button
        onClick={() => setPaymentMethod("eth")}
        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md transition 
          ${paymentMethod === "eth" ? "border-purple-500 border bg-[#2d2946]" : "border-gray-600 bg-[#1e1b2e]"}`}
      >
        <FaEthereum /> Eth
      </button>

      <button
        onClick={() => setPaymentMethod("bsc")}
        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md transition 
          ${paymentMethod === "bsc" ? "border-purple-500 border bg-[#2d2946]" : "border-gray-600 bg-[#1e1b2e]"}`}
      >
        <SiBinance /> BSC
      </button>

      <button
        onClick={() => setPaymentMethod("solana")}
        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md transition 
          ${paymentMethod === "solana" ? "border-purple-500 border bg-[#2d2946]" : "border-gray-600 bg-[#1e1b2e]"}`}
      >
        <SiSolana /> Solana
      </button>
    </div>
  );
};

export default PaymentOptions;
