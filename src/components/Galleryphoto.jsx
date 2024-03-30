import React from 'react'
import img2 from "../assets/C2.jpeg";
import img3 from "../assets/C3.jpeg";
import img4 from "../assets/C4.jpeg";
import img5 from "../assets/C5.jpeg";
import img6 from "../assets/C6.jpeg";
import img7 from "../assets/C7.jpeg";
import img8 from "../assets/C8.jpg";
import img9 from "../assets/C9.jpg";
import img10 from "../assets/C10.jpg";
import img11 from "../assets/C11.jpg";
import img12 from "../assets/C12.jpg";
import img13 from "../assets/C13.jpg";
import img14 from "../assets/C14.jpg";
import img15 from "../assets/C15.jpg";
import img16 from "../assets/C16.jpg";

import img20 from "../assets/C20.jpg";
import img21 from "../assets/C21.jpg";

import "./Galleyphoto.css";

const Galleryphoto = () => {
  return (
    <>
      <h2 className='galleryhead'><span>Gallery</span> </h2>
      <hr className="n2"/>

      <div className="allph">
        <img className='Galleryimg' src={img3} alt="" />
        <img className='Galleryimg' src={img4} alt="" />
        <img className='Galleryimg' src={img5} alt="" />
        <img className='Galleryimg' src={img6} alt="" />
      </div>
      <img className='bgalleryimg' src={img2} alt="" />

      <div className="allph">
        <img className='Galleryimg' src={img7}  alt="" />
        <img className='Galleryimg' src={img9}  alt="" />
        <img className='Galleryimg' src={img10} alt="" />
        <img className='Galleryimg' src={img11} alt="" />
      </div>
      <img className='bgalleryimg' src={img8} alt="" />
    <div className="allph">
    <img className='Galleryimg' src={img12} alt="" />
    <img className='Galleryimg' src={img13} alt="" />
    <img className='Galleryimg' src={img14} alt="" />
    <img className='Galleryimg' src={img15} alt="" />
    </div>
    <img className='bgalleryimg' src={img2} alt="" />
<div className="allph">
<img className='bgalleryimg' src={img16} alt="" />
<img className='bgalleryimg' src={img20} alt="" />
<img className='bgalleryimg' src={img21} alt="" />     
</div>



    </>
  )
}

export default Galleryphoto