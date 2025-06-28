import React from "react";
const WalletDetails = ({ walletAddress, networkName, tokenBalance }) => (
  <div className="text-sm mt-3 bg-[#1a1a1a] p-3 rounded-md border border-gray-700">
    <p><strong>Connected to:</strong> {networkName}</p>
    <p><strong>Address:</strong> {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
    <p><strong>Token Balance:</strong> {tokenBalance}</p>
  </div>
);

export default WalletDetails;
