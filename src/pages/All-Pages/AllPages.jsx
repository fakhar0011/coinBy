import React from 'react'
import About from '../../pages/about/About'
import CoinRoadMap from '../../pages/roadmap/CoinRoadMap'
import PlatForm from '../../pages/platforms/PlatForm'
import Tokenomics from '../../pages/tokenomics/Tokenomics'
import Vision from '../../pages/vision/Vision'
import FaqSection from '../../pages/faqs/FaqSection'
const AllPages = () => {
    return (
        <>
            <About />
            <CoinRoadMap />
            <PlatForm />
            <Tokenomics />
            <Vision />
            <FaqSection />
        </>
    )
}

export default AllPages