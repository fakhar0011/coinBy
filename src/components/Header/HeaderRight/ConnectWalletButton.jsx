import React from "react";
const ConnectWalletButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="cursor-pointer w-full mt-2 bg-gradient-to-r from-[#c600ff] to-[#aa00ff] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
    >
        Connect Wallet
    </button>
);

export default ConnectWalletButton;
