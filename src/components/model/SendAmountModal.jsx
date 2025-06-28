// SendAmountModal.jsx
import React, { useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

const SendAmountModal = ({ isOpen, onClose, selectedChain }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const sendAmount = async () => {
    try {
      if (!window.ethereum && selectedChain !== "solana") throw new Error("MetaMask not installed");

      if (selectedChain === "solana") {
        // Handle Phantom (Solana) send
        const provider = window.solana;
        if (!provider || !provider.isPhantom) throw new Error("Phantom not installed");

        await provider.connect();
        const fromPubKey = provider.publicKey;

        const transaction = {
          fromPubkey: fromPubKey,
          toPubkey: recipient,
          lamports: parseFloat(amount) * 1e9, 
        };

        toast("Send logic for Phantom not implemented in this example.");
      } else {
        // Handle MetaMask (Ethereum or BSC)
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const tx = await signer.sendTransaction({
          to: recipient,
          value: ethers.parseEther(amount),
        });

        toast.success("Transaction Sent! Tx Hash: " + tx.hash);
        await tx.wait();
        toast.success("Transaction Confirmed");
        onClose();
        setRecipient("");
        setAmount("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-[#1a1a1a] p-6 rounded-lg w-[350px] shadow-lg">
        {/* <h2 className="text-xl text-white font-bold mb-4">Send {selectedChain.toUpperCase()}</h2> */}

        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="cursor-pointer w-full mb-3 bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="cursor-pointer w-full mb-4 bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded"
        />

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className=" cursor-pointer bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={sendAmount}
            className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendAmountModal;
