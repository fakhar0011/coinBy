import { ethers } from "ethers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const getWalletBalance = async (address, chain) => {
  if (!address) return "0.00";

  try {
    if (chain === "ethereum") {
      const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY");
      const balance = await provider.getBalance(address);
      return ethers.formatEther(balance);
    }

    if (chain === "bsc") {
      const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
      const balance = await provider.getBalance(address);
      return ethers.formatEther(balance);
    }

    if (chain === "solana") {
      const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
      const publicKey = new PublicKey(address);
      const lamports = await connection.getBalance(publicKey);
      return (lamports / 1e9).toFixed(6);
    }

    return "0.00";
  } catch (err) {
    console.error("Balance fetch error:", err);
    return "0.00";
  }
};
