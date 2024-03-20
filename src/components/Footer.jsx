import './Footer.css';
import srmf from '../assets/srmf.png';
import eyantraf from '../assets/eyantraf.png';
import fbicon from '../assets/fb.png';
import xicon from '../assets/xlogo.png';
import igicon from '../assets/instalogo.png';
import liicon from '../assets/Lilogo.png';
import yticon from '../assets/ytlogo.png';
import picon from '../assets/tlicon.png';
import micon from '../assets/micon.png';

function Footer() {
  return (
    <>
      <div id="footer" className="mfooter"> 
        <img className='flogo' src={srmf} alt='srmlogo' />
        <img className='flogo' src={eyantraf} alt='srmlogo' />
        <div className='contact'>
          <img className='tele' src={picon} alt='' />
          +91 44 27417000
          <br />
          <img className='tele' src={picon} alt='' />
          +91 44 27417777
          <br />
          <img className='tele' src={picon} alt='' />
          +91 9443529372
          <br />
          <img className='tele' src={micon} alt='' />
          minur@srmist.edu.in
        </div>
      </div>
      <div className="lfooter">
        <div className="text ">Page Updated: 08/03/2024</div>
        <div className=" text">
          Privacy Policy
        </div>
        <div className="text">
          Copyrights All Rights Reserved
        </div>
        <div className='allogo'>
          <a href="https://www.facebook.com/SRMUniversityOfficial"><img className='logos' src={fbicon} alt="" /></a>
          <a href="https://twitter.com/SRM_Univ"><img className='logos' src={xicon} alt="" /></a>
          <a href="https://www.instagram.com/SRMUniversityOfficial/"><img className='logos' src={igicon} alt="" /></a>
          <a href="https://www.linkedin.com/company/srm-ist-chennai"><img className='logos' src={liicon} alt="" /></a>
          <a href="https://www.youtube.com/user/SRMeducation"><img className='logos' src={yticon} alt="" /></a>
        </div>
      </div>
    </>
  )
}
export default Footer;
