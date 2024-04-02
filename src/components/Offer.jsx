import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import png1 from '../assets/C9.jpg'
import png2 from '../assets/C13.jpg'
import './Offer.css';
function Offer() {
  return (
    <>
    <Nav/>
    <div className="o">
    <h1 className='achive'>What We Offer</h1>
    <hr className="n" />
    </div>
<div className="all1">
  <div className="one">
Explore the future with CSV0657J "Smart Devices DIY: Creating Smart
Solutions." This add-on course empowers you to delve into the realm of
smart devices, equipping you with the skills to craft innovative solutions
for the modern world.
</div>
<img className='Achiimg' src={png1} alt="" /> 
</div>    
<div className="all1">
  <img className='Achiimg' src={png2} alt="" /> 
  <div className="one">Dive into the cutting-edge realm of the metaverse with 21CSE294P
"Introduction to Metaverse," an industrial support elective. Discover the
concept of the Industrial Metaverse as we bridge the gap between IoT
devices and the virtual world, opening doors to limitless possibilities.</div>
</div>


    <Footer/>
    </>
  )
}

export default Offer