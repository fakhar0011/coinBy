import React from "react";

const JoinCommunity = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#3B0A53] to-[#120318] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-white max-w-xl">
          <h2 className="text-4xl md:text-5xl font-[Orbitron] font-semibold leading-tight mb-4">
            Join our community for
            <br />
            <span className="text-white">Update News</span>
          </h2>
          <p className="text-[#C3B4CC] text-lg mb-8">
            It has survived not only five centuries, but also the <br />
            leap into electronic remaining essentially unchanged
          </p>
          <button className="bg-[#e100ff] hover:bg-[#b800cc] text-white font-bold px-8 py-3 rounded-lg text-lg transition duration-300 shadow-lg cursor-pointer">
            Join Now
          </button>
        </div>

        {/* Right Image */}
        <div className="max-w-md w-full">
          <img
            src="https://coinbay-x2ul.onrender.com/assets/cta_img_1-BmGsBMjn.png"
            alt="Join Community Globe"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
