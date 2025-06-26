import React, { useState, useEffect } from 'react';
import { getWalletBalance } from "../../../utils/getBalance";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import NetworkIcon from './NetworkIcon';
import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { mainnet, solana, bsc } from '@reown/appkit/networks';

import CountdownTimer from './CountdownTimer';
import ProgressBar from './ProgressBar';
import NetworkSelector from './NetworkSelector';
import PaymentOptions from './PaymentOptions';
import AmountInput from './AmountInput';
import ConnectWalletButton from './ConnectWalletButton';
import WalletDetails from './WalletDetails';
import TokenStats from './TokenStats';
// import DynamicWalletCard from './DynamicWalletCard'; // make sure this is defined

const modal = createAppKit({
  adapters: [
    new WagmiAdapter({
      projectId: import.meta.env.VITE_PROJECT_ID,
      networks: [mainnet, bsc],
    }),
    new SolanaAdapter(),
  ],
  networks: [mainnet, bsc, solana],
  projectId: import.meta.env.VITE_PROJECT_ID,
});

const RightSection = () => {
  const [amount, setAmount] = useState("");
  const [selectedChain, setSelectedChain] = useState("ethereum");
  const [showWalletInfo, setShowWalletInfo] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("eth");
  const [networkName, setNetworkName] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  // 🔧 helper
  const getWalletProviderDetails = (chain) => {
    if (chain === "solana") {
      return {
        name: "Phantom Wallet",
        icon: "https://cryptologos.cc/logos/phantom-icon.svg?v=026"
      };
    }
    if (chain === "ethereum" || chain === "bsc") {
      return {
        name: "MetaMask Wallet",
        icon: "https://cryptologos.cc/logos/metamask-icon.svg?v=026"
      };
    }
    return { name: "Unknown", icon: "" };
  };

  // 🔁 Auto-refresh balance
  useEffect(() => {
    let interval;
    const autoRefreshBalance = async () => {
      if (walletAddress && networkName) {
        const balance = await getWalletBalance(walletAddress, networkName);
        setTokenBalance(parseFloat(balance).toFixed(4));
        toast.info("Balance auto-updated 🔁");
      }
    };

    if (walletAddress && networkName) {
      interval = setInterval(autoRefreshBalance, 30000);
    }

    return () => clearInterval(interval);
  }, [walletAddress, networkName]);

  const connectWallet = async () => {
    try {
      const chainId =
        selectedChain === "ethereum"
          ? "eip155:1"
          : selectedChain === "bsc"
            ? "eip155:56"
            : "solana:mainnet";

      await modal.open({ chain: chainId });

      let account = null;

      if (selectedChain === "ethereum" || selectedChain === "bsc") {
        account = await modal.getAccount({ namespace: "eip155" });
      } else if (selectedChain === "solana") {
        account = await modal.getAccount({ namespace: "solana" });
      }

      if (account) {
        const balance = await getWalletBalance(account.address, selectedChain);
        setWalletAddress(account.address);
        setNetworkName(selectedChain);
        setTokenBalance(parseFloat(balance).toFixed(4));
        toast.success("Wallet Connected ✅");
      } else {
        setWalletAddress("");
        setTokenBalance("");
        setNetworkName("");
      }
    } catch (err) {
      console.error(err);
      alert("Connection failed");
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#161020] to-[#100518] rounded-2xl shadow-xl hover:border border-purple-700 p-6 space-y-5 text-white">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold font-[Orbitron] flex items-center gap-2">
            <NetworkIcon chain={selectedChain} />
            CoinBay Presale
          </h2>
          <div className="flex gap-2">
            <span className="bg-purple-600 text-xs px-3 py-1 rounded-full font-semibold">Stage: 4</span>
            {networkName && (
              <span className="bg-gray-700 text-xs px-3 py-1 rounded-full font-semibold">
                {networkName.toUpperCase()}
              </span>
            )}
          </div>
        </div>
      </div>

      <CountdownTimer />
      <ProgressBar />
      <NetworkSelector
        selectedChain={selectedChain}
        setSelectedChain={(value) => {
          setSelectedChain(value);
          if (value === "ethereum") setPaymentMethod("eth");
          else if (value === "solana") setPaymentMethod("solana");
          else if (value === "bsc") setPaymentMethod("bsc");
        }}
      />
      <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <AmountInput amount={amount} setAmount={setAmount} />
      <ConnectWalletButton
        onClick={() => setShowWalletInfo(true)}
        selectedChain={selectedChain}
      />

      {walletAddress && (
        <DynamicWalletCard
          address={walletAddress}
          network={networkName}
          balance={tokenBalance}
          onDisconnect={() => {
            setWalletAddress("");
            setTokenBalance("");
            setNetworkName("");
          }}
        />
      )}

      <TokenStats />

      {/* 🔘 Wallet Connect Modal */}
      {showWalletInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-[#1f1f2f] text-white p-6 rounded-xl shadow-lg w-[320px] space-y-4">
            <h2 className="text-xl font-bold">Connect Your Wallet</h2>
            {(() => {
              const wallet = getWalletProviderDetails(selectedChain);
              return (
                <>
                  <p><strong>Selected Network:</strong> {selectedChain.toUpperCase()}</p>
                  <p className="flex items-center gap-2">
                    <strong>Recommended Wallet:</strong>
                    <img src={wallet.icon} alt="wallet" className="w-5 h-5" />
                    {wallet.name}
                  </p>
                </>
              );
            })()}
            <div className="flex gap-4 pt-4">
              <button
                onClick={async () => {
                  setShowWalletInfo(false);
                  await connectWallet();
                }}
                className="flex-1 bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold"
              >
                Connect
              </button>
              <button
                onClick={() => setShowWalletInfo(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded-lg font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default RightSection;
