import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#3B0A53] to-[#120318] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand & Social */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src="\src\assets\images\coin-bay-logo.png" alt="CoinBay" className="w-44 h-12" />
          </div>
          <p className="text-[#C3B4CC] mb-6">
            It has survived not only five centuries, but also the electronic
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-[#C3B4CC]">
            <li><a href="#">Authors</a></li>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Author Profile</a></li>
            <li><a href="#">Create Collection</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Resource</h3>
          <ul className="space-y-2 text-[#C3B4CC]">
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Live Actions</a></li>
            <li><a href="#">Item Details</a></li>
            <li><a href="#">Activity</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-[#C3B4CC]">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Discover</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe us</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Here"
              className="bg-transparent border border-[#a259ff] text-white px-4 py-2 rounded-l-sm w-full outline-none placeholder:text-[#aaa]"
            />
            <button className="bg-[#a259ff] hover:bg-[#9333ea] p-4 rounded-r-full text-white">
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      </div>

      
      <div className="border-t border-[#ffffff20] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#C3B4CC] font-medium">
        <p>Copyright 2023 @coinbay | All Right Reserved</p>
        <p className="mt-2 md:mt-0">Privacy & Policy / Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
