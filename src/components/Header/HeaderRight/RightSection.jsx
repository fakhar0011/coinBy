import React, { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiSolana } from "react-icons/si";
import { toast, Toaster } from "react-hot-toast";

const networkConfigs = {
  ethereum: {
    chainId: "0xaa36a7",
  },
  bsc: {
    chainId: "0x38",
    chainName: "BNB Smart Chain",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com/"],
  },
};

const RightSection = () => {
  const [selectedChain, setSelectedChain] = useState(localStorage.getItem("selectedChain") || "");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletType, setWalletType] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");

  useEffect(() => {
    if (selectedChain) {
      localStorage.setItem("selectedChain", selectedChain);
    }
  }, [selectedChain]);

  const isPhantomAvailable = () => window.solana?.isPhantom;
  const getMetaMaskProvider = () => {
    if (window.ethereum?.isMetaMask && !window.ethereum.providers) return window.ethereum;
    if (window.ethereum?.providers) return window.ethereum.providers.find((p) => p.isMetaMask);
    return null;
  };

  const connectWallet = async (chain) => {
    if (!chain) return;
    try {
      if (chain === "solana") {
        await connectToSolana();
      } else {
        await connectToEVM(chain);
      }
    } catch (err) {
      handleConnectionError(err, chain);
    }
  };

  const connectToSolana = async () => {
    if (!isPhantomAvailable()) throw new Error("Phantom wallet not installed.");
    try {
      const res = await window.solana.connect();
      const address = res.publicKey.toString();
      setWalletType("Phantom");
      setWalletAddress(address);
      fetchSolanaBalance(address);
    } catch (err) {
      toast.error("User cancelled wallet connection.");
    }
  };

  const fetchSolanaBalance = async (address) => {
    try {
      const response = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getBalance",
          params: [address],
        }),
      });
      const json = await response.json();
      setTokenBalance((json.result.value / 1e9).toFixed(4));
    } catch (err) {
      console.error("Failed to fetch Solana balance:", err);
    }
  };

  const connectToEVM = async (chain) => {
    const provider = getMetaMaskProvider();
    if (!provider) throw new Error("MetaMask is not installed.");

    if (chain === "bsc") await switchToBSC(provider);
    if (chain === "ethereum") await switchToSepolia(provider);

    try {
      const accounts = await provider.request({ method: "eth_requestAccounts" });
      const address = accounts[0];
      setWalletType("MetaMask");
      setWalletAddress(address);
      fetchEvmBalance(provider, address);
    } catch (err) {
      toast.error("User cancelled wallet connection.");
    }
  };

  const fetchEvmBalance = async (provider, address) => {
    const balance = await provider.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });
    setTokenBalance((parseInt(balance, 16) / 1e18).toFixed(4));
  };

  const switchToBSC = async (provider) => {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: networkConfigs.bsc.chainId }],
      });
    } catch (err) {
      if (err.code === 4902) {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [networkConfigs.bsc],
        });
      } else {
        throw err;
      }
    }
  };

  const switchToSepolia = async (provider) => {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: networkConfigs.ethereum.chainId }],
    });
  };

  const handleConnectionError = (error, chain) => {
    let msg = error.message;
    if (msg.includes("not installed")) {
      msg +=
        chain === "solana"
          ? "\n🔗 Install Phantom: https://phantom.app/"
          : "\n🔗 Install MetaMask: https://metamask.io/";
    }
    toast.error(msg);
  };

  const handleDisconnect = async () => {
    try {
      if (selectedChain === "solana" && isPhantomAvailable()) {
        await window.solana.disconnect();
      }
    } catch (err) {
      console.error("Disconnect error:", err);
    } finally {
      setWalletType("");
      setWalletAddress("");
      setTokenBalance("");
      toast.success("Disconnected");
    }
  };

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
    <div className="w-full lg:w-[400px] bg-gradient-to-b from-[#1b0e2d] to-[#100518] rounded-xl shadow-2xl border border-purple-800 p-6 space-y-6 text-white">
      <Toaster />

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-[Orbitron]">CoinBay Presale</h2>
        <span className="bg-purple-600 text-xs px-3 py-1 rounded-full font-semibold">Stage: 4</span>
      </div>

      <div className="bg-[#2a183d] rounded-md p-4 text-center space-y-2">
        <p className="text-sm text-gray-300 font-medium">Presale Ends In:</p>
        <div className="flex justify-between text-center gap-2 text-white text-xs font-semibold">
          {['6 Days', '5 Hours', '4 Mins', '37 Secs'].map((item, index) => (
            <div key={index} className="flex-1 bg-[#1a0f23] py-2 rounded-lg">
              <div className="text-xl font-bold">{item.split(' ')[0]}</div>
              <div className="text-[10px] uppercase text-purple-400">{item.split(' ')[1]}</div>
            </div>
          ))}
        </div>
        <div className="w-full h-2 bg-[#4b2259] rounded-full overflow-hidden mt-2">
          <div className="h-full bg-purple-500" style={{ width: "0.025%" }}></div>
        </div>
        <div className="text-xs flex justify-between text-purple-300 mt-1">
          <span>Raised: 250 USDT</span>
          <span>Goal: 1,000,000 USDT</span>
        </div>
        <div className="text-xs text-purple-300 mt-1">
          Tokens Sold: 2,500.00 | Total Tokens: 5,000,000,000.00
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Select Network:</label>
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-md px-3 py-2"
        >
          <option value="">-- Select Network --</option>
          <option value="ethereum">Ethereum</option>
          <option value="bsc">Binance Smart Chain</option>
          <option value="solana">Solana</option>
        </select>
      </div>

      {!walletAddress && selectedChain && (
        <button
          onClick={() => connectWallet(selectedChain)}
          className="w-full bg-gradient-to-r from-[#c600ff] to-[#aa00ff] text-white font-semibold py-3 rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          {getIcon()} Connect {getLabel()}
        </button>
      )}

      {walletAddress && (
        <div className="text-sm mt-3 bg-[#1a1a1a] p-3 rounded-md border border-gray-700">
          <p><strong>Connected to:</strong> {selectedChain.toUpperCase()}</p>
          <p><strong>Address:</strong> {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
          <p><strong>Token Balance:</strong> {tokenBalance}</p>
          <button
            onClick={handleDisconnect}
            className="mt-2 w-fit bg-red-600 text-xs text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default RightSection;
