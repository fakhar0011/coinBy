import React from "react";
import { FaInfoCircle, FaStar, FaLock } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";

const Platform = () => {
  return (
    <section className="bg-black py-20 px-4 text-white font-[Orbitron]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">PLATFORM</h2>
        <p className="text-purple-400 mt-1 text-sm tracking-widest uppercase">
          Advanced Trading Ecosystem
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        <div className="bg-[#14001f] border border-purple-900 rounded-lg p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b border-purple-800 pb-2">
            <h3 className="text-lg font-semibold">Platform Overview</h3>
            <FaInfoCircle className="text-purple-400" />
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            CoinBay.ai is a next-generation crypto trading platform combining AI-powered
            analytics with user-friendly interfaces. Our platform enables seamless trading
            across multiple blockchains with enhanced security, low fees, and optimized
            performance for both beginners and professional traders.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Active Users", value: "1M+" },
              { label: "Total Volume", value: "$50M+" },
              { label: "Supported Tokens", value: "100+" },
              { label: "Platform Uptime", value: "99.9%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#1e052e] border border-purple-800 rounded-lg py-4 px-3 text-center"
              >
                <h4 className="text-2xl text-purple-400 font-bold">{stat.value}</h4>
                <p className="text-gray-300 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-[#14001f] border border-purple-900 rounded-lg p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b border-purple-800 pb-2">
            <h3 className="text-lg font-semibold">Key Features</h3>
            <FaStar className="text-purple-400" />
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
            <div className="bg-[#1e052e] border border-purple-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-purple-400 font-semibold mb-1">
                <BsGraphUpArrow />
                <span>Decentralized Governance (DAO)</span>
              </div>
              <p className="text-gray-300 text-xs">
                Token holders vote on platform decisions.
              </p>
            </div>

           
            <div className="bg-[#1e052e] border border-purple-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-purple-400 font-semibold mb-1">
                <FaLock />
                <span>Loyalty & Rewards</span>
              </div>
              <p className="text-gray-300 text-xs">
                Earn incentives for active participation.
              </p>
            </div>

           
            <div className="bg-[#1e052e] border border-purple-800 rounded-lg p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-purple-400 font-semibold mb-1">
                <HiOutlineUsers />
                <span>Affiliate & Referral System</span>
              </div>
              <p className="text-gray-300 text-xs">
                Grow the platform and earn rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
