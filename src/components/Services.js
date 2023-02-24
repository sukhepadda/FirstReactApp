import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

function Services() {
  return (
    <div>
      <Carousel 
      infiniteLoop 
      autoPlay 
      // showStatus={false} use this for hide 2 of 2 status
      // showArrows={false} use this to hide directional arrows
      // showThumbs={false} use this to hide thumbnails
      // showIndicators={false} use this to hide dot dot indicators
      interval={2000}
      
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Frontend Developer</p> 
          {/* legend class is used to show text above the img */}
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Backend Developer</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
