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

    return (
        // <button
        //     onClick={onClick}
        //     className="cursor-pointer w-full mt-2 bg-gradient-to-r from-[#c600ff] to-[#aa00ff] text-white font-semibold py-2 rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
        // >
        //     {getIcon()} Connect {selectedChain.charAt(0).toUpperCase() + selectedChain.slice(1)} Wallet
        // </button>
        <ConnectWalletButton
            onClick={() => setShowWalletInfo(true)}
            selectedChain={selectedChain}
        />


    );
};

export default ConnectWalletButton;
