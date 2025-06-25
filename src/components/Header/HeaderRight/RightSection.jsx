import React from 'react'
import { FaEthereum, FaCreditCard } from "react-icons/fa";
import { useState } from 'react';

const RightSection = () => {
    const [amount, setAmount] = useState("");

  return (
    <>
     <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#161020] to-[#100518] rounded-2xl shadow-xl hover:border border-purple-700 p-6 space-y-5 text-white">
                        
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold font-[Orbitron]">CoinBay Presale</h2>
                            <span className="bg-purple-600 text-xs px-3 py-1 rounded-full font-semibold">
                                Stage: 4
                            </span>
                        </div>

                        {/* Countdown */}
                        <div>
                            <p className="text-sm text-gray-300 font-medium">Presale Ends In:</p>
                            <div className="flex justify-between text-center mt-2 gap-2">
                                {[
                                    { value: "6", label: "Days" },
                                    { value: "5", label: "Hours" },
                                    { value: "4", label: "Mins" },
                                    { value: "37", label: "Secs" },
                                ].map((item, index) => (
                                    <div key={index} className="flex-1 bg-[#2a183d] py-2 rounded-lg">
                                        <div className="text-2xl font-bold">{item.value}</div>
                                        <div className="text-xs uppercase text-gray-400">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress */}
                        <div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500" style={{ width: "0.025%" }}></div>
                            </div>
                            <div className="text-xs flex justify-between text-gray-400 mt-1">
                                <span>Raised: 250 USDT</span>
                                <span>Goal: 1,000,000 USDT</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                                Tokens Sold: 2,500.00 | Total Tokens: 5,000,000,000.00
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="flex flex-col sm:flex-row gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e1b2e] border border-gray-600 rounded-md px-3 py-2 hover:border-purple-500 transition">
                                <FaEthereum /> Eth
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e1b2e] border border-gray-600 rounded-md px-3 py-2 hover:border-purple-500 transition">
                                ETH
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e1b2e] border border-gray-600 rounded-md px-3 py-2 hover:border-purple-500 transition">
                                <FaCreditCard /> Credit Card
                            </button>
                        </div>

                        {/* Amount Input */}
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-md px-3 py-2 mt-1 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <div className="text-xs text-gray-400 mt-1">
                            0.00000 USD (0.00000 ETH)
                        </div>

                        {/* Wallet Button */}
                        <button className="cursor-pointer w-full mt-2 bg-gradient-to-r from-[#c600ff] to-[#aa00ff] text-white font-semibold py-2 rounded-md hover:opacity-90 transition">
                            Connect Wallet
                        </button>

                        {/* Token Info + Claimable Amount */}
                        <div className="text-sm text-gray-300 pt-2 border-t border-gray-700">
                            <div className="grid grid-cols-2 gap-y-2 bg-[#1a1a1a] p-4 rounded-md mt-3">
                                <div className="font-semibold">Token Price:</div>
                                <div className="text-right text-white">0.10600 USDT</div>

                                <div className="font-semibold">Next Stage Price:</div>
                                <div className="text-right text-white">0.108 USDT</div>

                                <div className="font-semibold">Min Purchase:</div>
                                <div className="text-right text-white">50 USDT</div>

                                <div className="font-semibold">Max Purchase:</div>
                                <div className="text-right text-white">50,000 USDT</div>
                            </div>

                            <div className="text-sm font-semibold text-white text-center pt-4">
                                Claimable Amount: <span className="text-white font-normal">0</span>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default RightSection