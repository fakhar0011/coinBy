import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaLock, FaStar, FaCreditCard, FaGift, FaUsers } from "react-icons/fa6";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaInfoCircle } from "react-icons/fa";


const tokenDistributionData = [
  { name: "Ecosystem", value: 40, color: "#A259FF" },
  { name: "Liquidity", value: 20, color: "#A26EFF" },
  { name: "Development", value: 20, color: "#A28CFF" },
  { name: "Team", value: 15, color: "#A2A8FF" },
  { name: "Reserve", value: 5, color: "#A2C5FF" },
];

const Tokenomics = () => {
  return (
    <section className="bg-black text-white px-4 py-16 font-[Orbitron]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">TOKENOMICS</h2>
        <p className="text-purple-500 mt-2 text-sm uppercase tracking-wide">CBAY Token Distribution & Utility</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-12">
        {/* Token Overview */}
        <div className="border border-purple-600 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">CBAY Token Overview</h3>
            <FaInfoCircle className="text-purple-500" />
          </div>
          <p className="text-gray-400 text-sm mb-6">
            CBAY is CoinBay.ai’s native token on the Binance Smart Chain (BSC), with a total supply of 1 billion tokens. It powers the entire ecosystem, enabling payments, staking, rewards, and governance.
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex justify-between">
              <span className="text-white">Token Name:</span>
              <span>CBAY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white">Network:</span>
              <span className="text-white font-semibold">Binance Smart Chain (BSC)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white">Total Supply:</span>
              <span className="text-white font-semibold">1,000,000,000 CBAY</span>
            </div>
          </div>
        </div>

        {/* Token Distribution */}
        <div className="border border-purple-600 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Token Distribution</h3>
            <FaCheckCircle className="text-purple-500" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={tokenDistributionData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
              >
                {tokenDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            {tokenDistributionData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: item.color }}></span>
                <span className="text-gray-300">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Token Utility & Holder Benefits */}
      <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Token Utility */}
        <div className="border border-purple-600 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Token Utility</h3>
            <FaStar className="text-purple-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-white">
            <div className="bg-[#150e20] p-4 rounded-xl">
              <FaCreditCard className="text-purple-400 text-2xl mb-2" />
              <p className="font-bold">Payments</p>
              <p className="text-gray-400">Use CBAY tokens for seamless transactions within the CoinBay ecosystem</p>
            </div>
            <div className="bg-[#150e20] p-4 rounded-xl">
              <FaStar className="text-purple-400 text-2xl mb-2" />
              <p className="font-bold">Staking</p>
              <p className="text-gray-400">Stake your CBAY tokens to earn passive income and additional rewards</p>
            </div>
            <div className="bg-[#150e20] p-4 rounded-xl">
              <FaGift className="text-purple-400 text-2xl mb-2" />
              <p className="font-bold">Rewards</p>
              <p className="text-gray-400">Earn CBAY tokens through various platform activities and contributions</p>
            </div>
            <div className="bg-[#150e20] p-4 rounded-xl">
              <FaUsers className="text-purple-400 text-2xl mb-2" />
              <p className="font-bold">Governance</p>
              <p className="text-gray-400">Participate in platform decisions and shape the future of CoinBay</p>
            </div>
          </div>
        </div>

        {/* Holder Benefits */}
        <div className="border border-purple-600 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">CBAY Holder Benefits</h3>
            <FaCheckCircle className="text-purple-500" />
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "Lower transaction fees across the platform",
              "Exclusive rewards and staking opportunities",
              "Voting rights on platform governance decisions",
              "Priority access to new features and NFT drops",
              "Enhanced trading capabilities and limits",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="text-purple-400 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
