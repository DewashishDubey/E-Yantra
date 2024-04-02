import React from 'react'
import './Achivements.css'
import Nav from './Nav'
import Footer from './Footer'
import img8 from '../assets/C8.jpg'
import img13 from '../assets/C13.jpg'
import img20 from '../assets/C20.jpg'

function Achivements() {
  return (
    <>
    <Nav/>
    <h1 className='achive'>Achivements</h1>
    <hr className="n" />
    <div className='cont'>
    <div className="fir">
      <div className="st1">Four teams from our lab showcased their prowess
by participating in a national-level project
hackathon hosted by IIT Bombay, solidifying our
position among the TOP 25 colleges in the country.</div> 
<img className='Achiimg' src={img8} alt="" /></div> 
<br/>

<div className="sec"><img className='Achiimg' src={img13} alt="" />
  <div className="st1">
  A cohort of 10 students and 4 faculty members
successfully completed a rigorous 50-day Online
Crash Course on Embedded Systems and Robotics,
meticulously designed and offered by e-Yantra.
  </div>

<br/>

</div>


<div className="thi">
  <div className="st1">Additionally, the same group underwent an
enriching online MOOC course on the Basics of
Embedded Systems and Robotics, provided free of
cost by e-Yantra.</div>
<img className='Achiimg' src={img20} alt="" />
</div>


    </div>

    <Footer/>
    </>
  )
}

export default Achivements