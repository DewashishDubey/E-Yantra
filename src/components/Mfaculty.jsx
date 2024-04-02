import React from 'react'
import S1 from '../assets/S1.png'
import S2 from '../assets/S2.png'
import S3 from '../assets/S3.png'
import S4 from '../assets/S4.png'
import S5 from '../assets/S5.png'
import S6 from '../assets/S6.jpg'
import './Mfaculty.css'
const Mfaculty = () => {
  return (
    <>
      <h2 className='facultyhead'>Faculty </h2>
      <hr className="n" />
      <div className="final">

        <div className="all">
          <div className="le">
            Faculty Name :<br /> Designation :<br /> Email Id :
          </div>
          <div className="mi">
            Dr. R. I. Minu<br />
            Professor<br /> minur@srmist.edu.in
          </div>
  
            <img  className='im'src={S1} alt="" />
          
        </div>


        <div className="all">
          <div className="le">
            Faculty Name :<br /> Designation :<br /> Email Id :
          </div>
          <div className="mi">
          Dr. J. Kalaivani <br />Associate  Professor <br /> kalaivaj@srmist.edu.in
          </div>
  
            <img  className='im'src={S2} alt="" />
          
        </div>


        <div className="all">
          <div className="le">
            Faculty Name :<br /> Designation :<br /> Email Id :
          </div>
          <div className="mi">
          Dr Kirubanantham <br />Assistant Professor <br />kirubanp2@srmist.edu.in
          </div>
  
            <img  className='im'src={S3} alt="" />
          
        </div>


        
        <div className="all">
          <div className="le">
            Faculty Name :<br /> Designation :<br /> Email Id :
          </div>
          <div className="mi">
          Dr. C. AshokKumar <br />Assistant Professor<br /> ashokkuc@srmist.edu.in
          </div>
  
            <img  className='im'src={S4} alt="" />
          
        </div>
        <div className="all">
          <div className="le">
            Faculty Name :<br /> Designation :<br /> Email Id :
          </div>
          <div className="mi">
          Dr. M. Suganiya <br />Assistant Professor<br /> suganiym@srmist.edu
          </div>
  
            <img  className='im'src={S5} alt="" />
          
        </div>
        <div className="all">
          <div className="le">
            Faculty Name :<br /> Designation :<br /> Email Id :
          </div>
          <div className="mi">
          Dr. Angayarkanni <br />Assistant Professor <br />angayarv@srmist.edu.in
          </div>
  
            <img  className='im'src={S6} alt="" />
          
        </div>
       

      </div>

    </>
  )
}
export default Mfaculty