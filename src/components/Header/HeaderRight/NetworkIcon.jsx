// components/NetworkIcon.jsx
import React from "react";
import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiSolana } from "react-icons/si";

const NetworkIcon = ({ chain }) => {
  if (chain === "ethereum") return <FaEthereum className="text-purple-400" />;
  if (chain === "bsc") return <SiBinance className="text-yellow-400" />;
  if (chain === "solana") return <SiSolana className="text-green-400" />;
  return null;
};

export default NetworkIcon;
