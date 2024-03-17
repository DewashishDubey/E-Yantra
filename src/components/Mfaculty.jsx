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
      <div className="all">
        <div className="first" id='f'>
          Faculty Name
          Designation
          Email Id
          <br />
          <br />
          <br />
          <br />
          <br />
          Faculty Name
          Designation
          Email Id
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="last">
          Faculty Name
          Designation
          Email Id</div>
          <br />
          <br />
          <br />
          <br />
          <div className="last">
          Faculty Name
          Designation
          Email Id</div>
          <br />
          <br />
          <br />
          <br />
          <div className="last">
          Faculty Name
          Designation
          Email Id</div>
          <br />
          <br />
          <br />
          <br />
          <div className="last">
          Faculty Name
          Designation
          Email Id</div>
        </div>
        <div className="linef"></div>
        <div className="first" id='t'>
          Dr. R. I. Minu <br />
          Professor
          minur@srmist.edu.in
          <br />
          <br />
          <br />
          <br /><br />
          Dr. J. Kalaivani
          Associate Professor
          kalaivaj@srmist.edu.in
          <br />
          <br />
          <br />
          <br />
          <br />
          Dr Kirubanantham
          Assistant Professor
          kirubanp2@srmist.edu.in    <br />
          <br />
          <br />
          <br />
          Dr. C. AshokKumar
          Assistant Professor
          ashokkuc@srmist.edu.in    <br />
          <br />
          <br />
          <br />
          Dr. M. Suganiya
          Assistant Professor
          suganiym@srmist.edu.in    <br />
          <br />
          <br />
          <br />
          Dr. Angayarkanni
          Assistant Professor
          angayarv@srmist.edu.in
        </div>
        <div className="first" id='r'>
          <img className="mu" src={S1} alt="" />
          <img className="mu" src={S2} alt="" />
          <img className="mu" src={S3} alt="" />
          <img className="mu" src={S4} alt="" />
          <img className="mu" src={S5} alt="" />
          <img className="mu" src={S6} alt="" />
        </div>
      </div>
    </>
  )
}
export default Mfaculty