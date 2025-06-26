import React from 'react'
import RotateBadge from "../../RotateBadge";


const LeftSection = () => {
    return (
        <>
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 relative">
                        <img
                            src="/src/assets/images/hero_shape_1-BsSLmpVh.svg"
                            alt="Background Shape"
                            className="absolute top-[-100px] right-[-100px] w-[600px] opacity-40 -z-10 pointer-events-none"
                        />

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            The Future of <br />
                            eCommerce with <br />
                            <span>Crypto Power</span>
                        </h1>

                        <p className="text-gray-300 text-base max-w-md mx-auto lg:mx-0">
                            CoinBay is a decentralized marketplace for buying and selling digital
                            and physical products — secured by blockchain, powered by crypto, and
                            open to the world.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-6 py-3 rounded-lg w-full sm:w-auto">
                                Get Connected
                            </button>
                            <button className="font-bold px-6 py-3 rounded-lg cursor-pointer inline-flex items-center gap-2 text-white border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 w-full sm:w-auto">
                                Join Whitelist
                            </button>

                            {/* RotateBadge hidden on mobile/tablet */}
                            <div className="hidden lg:block mt-4 ml-4">
                                <RotateBadge />
                            </div>
                        </div>
                    </div>
 
        </>
    )
}

export default LeftSection