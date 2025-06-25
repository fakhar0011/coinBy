import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
    {
        question: "What is CoinBay.Ai?",
        answer:
            "CoinBay.Ai is a decentralized eCommerce platform that allows users to buy and sell both digital and physical products using cryptocurrency. It’s powered by blockchain and enhanced by AI for secure, fast, and global commerce.",
    },
    {
        question: "What kind of products can I sell or buy on CoinBay.Ai?",
        answer: "Vendors can list a wide range of items including software, NFTs, digital services, electronics, clothing, accessories, artwork, and more.",
    },
    {
        question: "Is CoinBay.Ai available globally?",
        answer: "Yes, the platform is fully decentralized and accessible worldwide, allowing anyone to participate regardless of location.",
    },
    {
        question: "How secure is the payment process?",
        answer: "All transactions are processed on-chain using smart contracts and supported wallets, ensuring full transparency, security, and no middlemen.",
    },
    {
        question: "Which cryptocurrencies are accepted?",
        answer: "CoinBay.Ai supports 21+ cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, BNB, SOL, and others. More tokens are added regularly based on community demand.",
    },
    {
        question: "Do I need technical knowledge or coding skills to sell?",
        answer: "Not at all. CoinBay.Ai offers a user-friendly vendor dashboard where anyone can create a store, upload products, and start selling in minutes.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="bg-black text-white py-20 px-4 md:px-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron]">
                    Our Expert Answers
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-[#1a1a1a] p-6 rounded-md border border-[#222]"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center text-left font-[Orbitron] text-lg md:text-xl"
                        >
                            <span>{faq.question}</span>
                            {openIndex === index ? (
                                <FaChevronUp className="text-gray-300 cursor-pointer" />
                            ) : (
                                <FaChevronDown className="text-gray-300 cursor-pointer" />
                            )}
                        </button>
                        {openIndex === index && faq.answer && (
                            <p className="mt-4 text-sm text-gray-400">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
