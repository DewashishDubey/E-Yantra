import './About.css'
import heroimg from '../assets/heroimg.png';


function About() {
  return (
    <>
      <div className='hero' id='about' >
        
        <div className='about'>About Us</div>
        <div className="any">
        <img className='heroimg' src={heroimg} alt='logo'/>
        <div className='aboutcard'>
            <div className="abouttext">E-Yantra is a robotics focused educational outreach initiative of the Department of Computer Science and Engineering at the SRM institute of Science and Technology, Chennai.
          <br/>
          <br />
          <br/>
          It is funded by the Ministry of Education, Government of India, under the National Mission on Education through ICT.</div>
          </div>
          </div>
      </div>
    </>
  )
}

export default About
