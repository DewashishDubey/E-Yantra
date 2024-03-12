import "./HeroC.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/C1.jpeg"
import img2 from "../assets/C2.jpeg"
import img3 from "../assets/C3.jpeg"
import img4 from "../assets/C4.jpeg"
import img5 from "../assets/C5.jpeg"

function HeroC() {
   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 100,
    cssEase: "linear"
  };
  return (
    <>
        <h2><span>For</span> Future Reference</h2>

    <div className="slider-container">
      <Slider {...settings}>
        <div className="ccard">
          <img className="cimg" src={img1}/>
      </div>
        <div className="ccard">
        <img className="cimg" src={img2}/>
      </div>
      <div className="ccard">
          <img className="cimg" src={img3}/>
      </div>
      <div className="ccard">
          <img className="cimg" src={img4}/>
      </div>
      <div className="ccard">
          <img className="cimg" src={img5}/>
      </div>
    </Slider>
      </div>
      </>
  )
}

export default HeroC
