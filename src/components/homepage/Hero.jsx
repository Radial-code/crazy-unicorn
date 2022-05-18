import React from "react";
import HeroRainbow from "../../assets/image/hero/hero-rainbow.png";
import HeroCloud from "../../assets/image/hero/hero-cloud.png";

const Hero = () => {
  return (
    <>
      <div
        className="p-5 position-relative min_height_100 z-1 overflow-x-hidden"
        id="HOME"
      >
        {/* <div className="position-absolute w-100 left-0">
          <img className="w-100" src={HeroCloud} alt="hero-cloud" />
        </div> */}
        <div className="row justify-content-center mt-0">
          <div className="col-lg-10 col-xxl-8 mt-5 z_index_1">
            <img className="w-100" src={HeroRainbow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
