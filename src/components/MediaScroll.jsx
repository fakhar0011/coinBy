import React from "react";
import "../components/Media.css"

const logos = [
  "https://coinbay-x2ul.onrender.com/assets/9-CGaHVG1w.png",
  "https://coinbay-x2ul.onrender.com/assets/4-Dw2v7ph8.png",
  "https://coinbay-x2ul.onrender.com/assets/12-DlEqXIoJ.png",
  "https://coinbay-x2ul.onrender.com/assets/8-BxmClMaS.png",
  "https://coinbay-x2ul.onrender.com/assets/9-CGaHVG1w.png",
  "https://coinbay-x2ul.onrender.com/assets/14-tbY8xJBd.png",
  "https://coinbay-x2ul.onrender.com/assets/15-Dp0Wez-N.png",
  "https://coinbay-x2ul.onrender.com/assets/1-VZkSy2cy.png",
  "https://coinbay-x2ul.onrender.com/assets/7-tLjsCBAD.png",
  "https://coinbay-x2ul.onrender.com/assets/4-Dw2v7ph8.png",
  "https://coinbay-x2ul.onrender.com/assets/5-E8On8GTA.png",
  "https://coinbay-x2ul.onrender.com/assets/11-BKsmOWgS.png",
  "https://coinbay-x2ul.onrender.com/assets/10-CQrbviQA.png",

];


const MediaScroll = () => {

  return (
   <div className="w-full overflow-hidden py-8 media-scroll-bg">
  <div className="whitespace-nowrap flex animate-scroll pause-on-hover">
    {logos.concat(logos).map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt="logo"
        className="h-10 mx-6 inline-block"
      />
    ))}
  </div>
</div>


  );
};

export default MediaScroll;
