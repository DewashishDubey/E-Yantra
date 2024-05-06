import React from 'react'
import './Completed.css'
import Nav from './Nav'
import Footer from './Footer'
import { NavLink } from 'react-router-dom';
// import Projectnav from './Projectnav'
function Completed() {
  return (
    <>
    <Nav/>
    <div className="flex">
    <NavLink to="/ongoing"><h1 className='ong'>Ongoing projects</h1></NavLink>
       <NavLink to="/completed"><h1 className='com'>Completed projects</h1></NavLink>
       </div>
    <table>
                <tr>
                    <th>S.No</th>
                  <th>Particulars</th>
                  <th>Mentors</th>
                  <th>Project Links</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>4 wheel -Line follower using Arduino</td>
                  <td>Dr.J.Kalaivani and Dr.V.Angayarkanni</td>
                  <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Automated Attendance and Access Control System</td>
                  <td>Dr.J.Kalaivani</td>
                  <td><a className='tablelink1' href="https://youtu.be/GV-Y_JkH1Ds?si=C4TwF2LgrC351FoR">Project Link</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Light Automation System with Voice Assistant</td>
                    <td>Dr.V.Angayarkanni
                  </td>
                  <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Microprocessor Component Detector</td>
                  <td>Dr.P.Kirubanandham</td>
                  <td><a className='tablelink1' href="https://youtu.be/TIYP11y1q7k">Project Link</a></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Security system with Raspberry Pi cameras and motion detectors.</td>
                  <td>Dr.C.Ashok kumar</td>
                  <td><a className='tablelink' href="https://youtu.be/zacMMSCJZQA?feature=shared">Project Link</a></td>
              </tr>
              

            </table>
            <p>
                <br /><br />
                <div className="blue">
                YouTube Video Links
                </div>
                <div className="left" id='left'>
                    <a href='https://www.youtube.com/watch?v=TIYP11y1q7k'>•Detecting Raspberry Pi Microprocessor  components using image recognition</a>
</div>
                <div className="left" id='left'>
                    <a href='https://www.youtube.com/watch?v=TIYP11y1q7k'>•Elsi Hackathon</a>
</div>
                <div className="left" id='left'>
                    <a href='https://www.youtube.com/watch?v=GV-Y_JkH1Ds'>•Elsi Hackathon</a>
</div>
                <p className='blue'>HARDWARE CONFIGURATION</p>  <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;COMPONENTS<br /><br />
                <div className="left">
                    &nbsp;&nbsp;&nbsp;&nbsp;•Fire Bird V – ATmega2560<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•LPC2148 Development Board<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•ATmega2560 Development Board<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•P89V51RD2 Development Board<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•ESP8266 and ESP32 DevelopmentBoard<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Raspberry-Pi 3<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•STM32 Nucleo boards<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Altera Cyclone IV FPG , DE0-Nano<br /></div>
                <p className='blue'>SYSTEMS CONFIGURATION</p><br />
                &nbsp;&nbsp;&nbsp;&nbsp; HP Elite Desk 800GB<br />
                <div className="left">&nbsp;&nbsp;&nbsp;&nbsp;•Intel Core i7-11700GHz Processor<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Intel Graphics UHD 750, 256GB SSD<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•32 GB RAM<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•1TB HDD<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•HP V19 HD Monitor<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Dell OptiPlex 9020<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Intel Core i5 3.20 GHz Processor<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•4 GB RAM<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•500 GB HDD<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Dell Monitor 18.5”<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Keyboard & Mouse<br /></div>
                <p className='blue'>SOFTWARE CONFIGURATION</p><br />
                <div className="left">
                    &nbsp;&nbsp;&nbsp;&nbsp;•Arduino IDE<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•SimulIDE 0.4.15<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Microchip Studio<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•AVR Studio<br /></div>
                <br /><br />
                <div className="center">
                    <div className="blue">Lab Details<br /><br /> </div>
                    Coordinator’s Name  : Dr.R.I.Minu<br />
                    Faculty In-charge       :
                    Dr.J.Kalaivani / Dr.V.Angayarkanni<br />
                    Programmer’s Name  : Mrs.Jeeva<br />
                    Venue : TP-1508<br /><br /></div></p>
    <Footer/>
    </>
  )
}

export default Completed