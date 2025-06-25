import React, { useState, useEffect } from "react";
import { FaWallet, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMenu = () => setMobileOpen(!mobileOpen);
    const closeMenu = () => setMobileOpen(false);


    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [mobileOpen]);


    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const menuItems = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT", href: "#about" },
        { name: "ROADMAP", href: "#roadmap" },
        { name: "PLATFORM", href: "#platform" },
        { name: "TOKENOMICS", href: "#tokenomics" },
        { name: "VISION", href: "#vision" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1a002c] to-[#0d001a] shadow-lg px-4 sm:px-6 py-4 flex justify-between items-center">


            <div className="flex items-center gap-2">
                <img
                    src="https://coinbay-x2ul.onrender.com/assets/logoo-BcEwy0Jc.png"
                    alt="CoinBay Logo"
                    className="h-10 w-auto"
                />
            </div>


            <nav className="hidden md:flex items-center gap-6 text-gray-300 font-semibold">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="hover:text-white transition-colors duration-300"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>


            <div className="hidden md:inline-flex">
                <button className="cursor-pointer inline-flex items-center gap-2 px-6 py-2 rounded-md font-semibold text-white border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                    <FaWallet className="text-lg" />
                    <span>Connect Wallet</span>
                </button>
            </div>


            <div className="md:hidden z-50">
                <button onClick={toggleMenu} className="text-white text-2xl">
                    {mobileOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#140021] p-6 pt-24 flex flex-col gap-5 text-white transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    } z-40`}
            >
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="text-lg hover:text-pink-500 transition-colors duration-200"
                    >
                        {item.name}
                    </a>
                ))}


                <button
                    onClick={closeMenu}
                    className="cursor-pointer mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-md font-semibold text-white border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                >
                    <FaWallet className="text-lg" />
                    <span>Connect Wallet</span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
