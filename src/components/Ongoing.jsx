import React, { useState } from 'react';
import './Ongoing.css';
import { NavLink } from 'react-router-dom';
import "./Ongoing.css";
import Footer from './Footer';
import Nav from './Nav';
const Ongoing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <Nav/>
            <div className="flex">
            <NavLink to="/ongoing" ><span><h1 className='ong1'>Ongoing projects</h1></span></NavLink>
            <NavLink to="/completed" ><span><h1 className='com1'>Completed projects</h1></span></NavLink>
            </div>
            <div className="tab">
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Particulars</th>
                    <th>Mentors</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>4 wheel Line follower using Raspberry Pi</td>
                    <td>Dr.J.Kalaivani and Dr.V.Angayarkanni</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Smart Parking system</td>
                    <td>Dr.V.Angayarkanni</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Developing a smart mirror with an integrated face recognition system</td>
                    <td>Dr.M.Suganiya</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>RFID Door Access Control</td>
                    <td>Dr.P.Kirubanandham</td>
                </tr>

            </table>
            </div>
            <p>
                <br /><br />
                <p className='blue'>HARDWARE CONFIGURATION</p>  <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;COMPONENTS<br /><br />
                <div className="left">
                    &nbsp;&nbsp;&nbsp;&nbsp;•ATmega2560 Development Board<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•Fire Bird V – ATmega2560<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•LPC2148 Development Board<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•P89V51RD2 Development Board<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;•ESP8266 and ESP32 Development Board<br />
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
            <Footer />

        </>
    )
}

export default Ongoing