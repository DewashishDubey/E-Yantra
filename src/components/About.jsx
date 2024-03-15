import './About.css'
import heroimg from '../assets/heroimg.png';
import heroimg1 from '../assets/eysrc.png';
function About() {
  return (
    <>
      <div className='hero' id='about' >
        
        <div className='about'>About Us</div>
        <div className="any">
        <img className='heroimg' src={heroimg} alt='logo'/>
        <div className='aboutcard'>
            <div className="abouttext">E-yantra, spearheaded by IIT Bombay, strives to cultivate a new wave of embedded systems and robotic engineers equipped with a practical mindset to address real-world challenges with practical solutions. This initiative receives sponsorship from the Ministry of Human Resource Development (MHRD) as part of the National Mission on Education through Information and Communication Technology (ICT) program.
</div>
           
          </div>
          <span className='obj'>Objective</span>

          <div className="abouttext" id='abouttext1'>

<br />
To foster awareness about robotics among students and equip them with the essential skill sets needed for a competitive industry in this field.
<br />
To assist and mentor students in diverse areas concerning robotics and embedded systems, focusing particularly on computer science and engineering
<br />
To impart practical understanding of ATmega 2560 microcontrollers to students.
            </div>
            <img  id='nimg' src={heroimg1} alt='logo'/>
          </div>
      </div>
    </>
  )
} 

export default About
