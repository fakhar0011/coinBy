import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#13001a] to-black py-20 text-white px-4 lg:px-20"
    >
      {/* Centered Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron]">
          ABOUT COINBAY.AI
        </h2>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img
            src="/src/assets/images/history_left_1-BDaYmsQ1.png"
            alt="Crypto Wallet"
            className="w-[90%] md:w-[450px] xl:w-[500px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <p className="uppercase text-sm text-purple-400 tracking-widest mb-2 font-semibold">
            Platform Overview
          </p>

          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight font-[Orbitron] mb-4">
            CRYPTO-POWERED <br />
            ECOMMERCE <br />
            MARKETPLACE
          </h3>

          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg">
            CoinBay.ai is a crypto-powered eCommerce platform where users can
            buy and sell both digital and physical products. It provides a
            decentralized marketplace built on blockchain technology to ensure
            secure, transparent, and borderless transactions.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Decentralized Vendor System",
              "Crypto Payments (No Banks)",
              "Secure & Transparent Transactions",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 font-semibold">
                <FaCheckCircle className="text-purple-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition text-white font-bold px-6 py-2 rounded-md">
            Explore Marketplace
          </button>
        </div>
      </div>

      
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
  {[
    { value: "365+", label: "Supported Wallets" },
    { value: "225+", label: "Global Crypto Vendors" },
    { value: "999+", label: "Registered Users" },
    { value: "21+", label: "Cryptocurrencies Accepted" },
  ].map((item, idx) => (
    <div key={idx}>
      <h3 className="text-7xl font-bold font-[Orbitron]">{item.value}</h3>
      <p className="text-gray-400 text-lg">{item.label}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default About;
