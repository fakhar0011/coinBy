const ConnectWalletButton = ({ onClick, selectedChain }) => {
  const chainLabel = selectedChain === "ethereum"
    ? "Ethereum"
    : selectedChain === "bsc"
    ? "BSC"
    : "Solana";

  return (
    <button
      onClick={onClick}
      className="cursor-pointer w-full mt-2 bg-gradient-to-r from-[#c600ff] to-[#aa00ff] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
    >
      Connect {chainLabel}
    </button>
  );
};

export default ConnectWalletButton;
