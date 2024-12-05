import './About.css'
import heroimg from '../assets/heroimg.png';
import heroimg1 from '../assets/eysrc.png';
import mission from '../assets/miss.png';
import mission1 from '../assets/about.png';
function About() {
  return (
    <> 
      <div className="hero" >
        <div className='about'>About Us</div>

          <div className="any">
            <img className='heroimg' src={heroimg} alt='logo' />
            <div className="aboutcard">
            
                E-yantra, spearheaded by IIT Bombay, strives to cultivate a new wave of embedded systems and robotic engineers equipped with a practical mindset to address real-world challenges with practical solutions. This initiative receives sponsorship from the Ministry of Human Resource Development (MHRD) as part of the National Mission on Education through Information and Communication Technology (ICT) program.
            
            </div>
          </div>
          <div className='obj'>Objective</div>

          <div className="ndall">
            <div className="aboutcard">

              <br />
              To foster awareness about robotics among students and equip them with the essential skill sets needed for a competitive industry in this field.
              <br />
              To assist and mentor students in diverse areas concerning robotics and embedded systems, focusing particularly on computer science and engineering
              <br />
              To impart practical understanding of ATmega 2560 microcontrollers to students.
            </div>
            <img id='nimg' src={heroimg1} alt='logo' />
          </div>
          <div className="mission">Mission</div>
          <div className="rdall">
          <img className='miss' src={mission} alt='logo' />
          <div className="aboutcard">
          To foster awareness about Internet of Things among
students and equip them with the essential skill sets
needed for a competitive industry in this field
To assist and mentor students in diverse areas
concerning robotics and embedded systems especially
for CSE
To build real-world problem-solving abilities for
creating a sustainable ecosystem with students and
faculty
          </div>
        
          </div>
          <div className="vision">Vision</div>
          <div className="thall">
           
            <div className="aboutcard" id='oo'>
            A unique space dedicated for fostering creativity and
innovation in the realm of Embedded systems, Internet
of Things (IoT), Robotics and Digital twin.
          </div>
          <img className='nimg'src={mission1} alt="" />
          </div>
      </div>
    </>
  )
}

export default About
