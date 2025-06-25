import React from 'react';
import MediaScroll from '../MediaScroll';
import LeftSection from './HeaderLeft/LeftSection';
import RightSection from "./HeaderRight/RightSection"

const Headr = () => {

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white px-4 pt-36 pb-12 sm:pt-44 md:pt-52">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

                    {/* LEFT SECTION */}
                    <LeftSection />
                    {/* RIGHT SECTION */}
                    <RightSection />
                </div>
            </div>

            {/* MediaScroller */}
            <MediaScroll />
        </>
    );
};

export default Headr;
