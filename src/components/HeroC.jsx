import React from "react";
import "./HeroC.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/C1.jpeg";
import img2 from "../assets/C2.jpeg";
import img3 from "../assets/C3.jpeg";
import img4 from "../assets/C8.jpg";
import img5 from "../assets/C9.jpg";


function HeroC() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000, 
    autoplaySpeed: 300, 
    cssEase: "linear"
  };

  return (
    <>
    <div className="o">
      <h2>
        Highlights
      </h2>
      <hr className="n" />
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="ccard">
            <img className="cimg" src={img1} alt="img1" />
          </div>
          <div className="ccard">
            <img className="cimg" src={img2} alt="img2" />
          </div>
          <div className="ccard">
            <img className="cimg" src={img3} alt="img3" />
          </div>
          <div className="ccard">
            <img className="cimg"  src={img4} alt="img4" />
          </div>
          <div className="ccard">
            <img className="cimg"  src={img5} alt="img5" />
          </div>
          
        
        </Slider>
      </div>
    </>
  );
}

export default HeroC;
