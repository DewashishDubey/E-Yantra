import "./Staff.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/S1.png"
import img2 from "../assets/S2.png"
import img3 from "../assets/S3.png"
import img4 from "../assets/S4.png"
import img5 from "../assets/S5.png"

function Staff() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 300,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (<>
    <div id="Staff">
      <div className="o">
      <h2><span>Faculty</span> </h2>
      <hr className="n" />
      </div>
      

      <div className="slider-container">
        <Slider {...settings}>
          <div className="scard">
            <img className="simg" src={img1} />
            <div className="sal">
              <h5>Dr.R.I.Minu<br />Professor<br />minur@srmist.edu.in</h5>
            </div>

          </div>
          <div className="space"></div>
          <div className="scard">
            <img className="simg" src={img2} />
            <div className="sal">
              <h5>Dr.J.Kalaivani<br />Associate Professor<br />kalaivaj@srmist.edu.in</h5>
            </div>
          </div>
          <div className="space"></div>
          <div className="scard">
            <img className="simg" src={img3} />
            <div className="sal">
              <h5>Dr. Kirubanantham P<br />Assistant Professor<br />kirubanp2@srmist.edu.in</h5>
            </div>
          </div>
          <div className="space"></div>
          <div className="scard">
            <img className="simg" src={img4} />
            <div className="sal">
              <h5>Dr.C.AshokKumar<br />Assistant Professor<br />ashokkuc@srmist.edu.in</h5>
            </div>
          </div>
          <div className="space"></div>

          <div className="scard">
            <img className="simg" src={img5} />
            <div className="sal">
              <h5>Dr. M. Suganiya<br />Assistant Professor<br />suganiym@srmist.edu.in</h5>
            </div>

          </div>

          <div className="space"></div>
        </Slider>
      </div>
    </div>
  </>
  )
}

export default Staff;
