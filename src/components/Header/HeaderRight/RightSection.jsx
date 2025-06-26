import React, { useState } from 'react';
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
    const [walletAddress, setWalletAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("eth");
    const [networkName, setNetworkName] = useState("");
    const [tokenBalance, setTokenBalance] = useState("");

    const connectWallet = async () => {
        try {
            const chain =
                selectedChain === "ethereum"
                    ? "eip155:1"
                    : selectedChain === "bsc"
                        ? "eip155:56"
                        : "solana:mainnet";

            await modal.open({ chain });

            const evmAcct = await modal.getAccount({ namespace: "eip155" });
            const solAcct = await modal.getAccount({ namespace: "solana" });

            const acct = evmAcct || solAcct;
            if (acct) {
                setWalletAddress(acct.address);
                setNetworkName(selectedChain);
                setTokenBalance("0.00");
            }
        } catch {
            alert("Connection failed");
        }
    };

    return (
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#161020] to-[#100518] rounded-2xl shadow-xl hover:border border-purple-700 p-6 space-y-5 text-white">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold font-[Orbitron]">CoinBay Presale</h2>
                    <div className="flex items-center gap-2">
  {selectedChain && (
    <span className="flex items-center gap-1 bg-gray-700 text-xs px-3 py-1 rounded-full font-semibold">
      {selectedChain === "ethereum" && <FaEthereum />}
      {selectedChain === "bsc" && <SiBinance />}
      {selectedChain === "solana" && <SiSolana />}
      {selectedChain.toUpperCase()}
    </span>
  )}

  {/* ✅ Show wallet icon based on selected chain */}
  {selectedChain === "ethereum" || selectedChain === "bsc" ? (
    <span className="flex items-center gap-1 bg-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">
      <SiMetamask /> MetaMask
    </span>
  ) : selectedChain === "solana" ? (
    <span className="flex items-center gap-1 bg-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
      <SiPhantom /> Phantom
    </span>
  ) : null}

  <span className="bg-purple-600 text-xs px-3 py-1 rounded-full font-semibold">Stage: 4</span>
</div>

                </div>
                <span className="bg-purple-600 text-xs px-3 py-1 rounded-full font-semibold">Stage: 4</span>
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
            <ConnectWalletButton onClick={connectWallet} selectedChain={selectedChain} />
            {walletAddress &&
                <WalletDetails walletAddress={walletAddress}
                    networkName={networkName} tokenBalance={tokenBalance}
                />}
            <TokenStats />

        </div>
    );
};

export default RightSection;
