import React from "react";
import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiSolana } from "react-icons/si";

const ConnectWalletButton = ({ onClick, selectedChain }) => {
  const getIcon = () => {
    if (selectedChain === "ethereum") return <FaEthereum />;
    if (selectedChain === "bsc") return <SiBinance />;
    if (selectedChain === "solana") return <SiSolana />;
    return null;
  };

  const getLabel = () => {
    switch (selectedChain) {
      case "ethereum": return "MetaMask";
      case "bsc": return "MetaMask";
      case "solana": return "Phantom";
      default: return "Wallet";
    }
  };

  return (
    <button
      onClick={onClick}
      className="cursor-pointer w-full mt-2 bg-gradient-to-r from-[#c600ff] to-[#aa00ff] text-white font-semibold py-2 rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
    >
      {getIcon()} Connect {getLabel()}
    </button>
  );
};

export default ConnectWalletButton;