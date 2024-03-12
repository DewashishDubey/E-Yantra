import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import pic1 from '../assets/pic1.jpg';
import pic10 from '../assets/pic10.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';

import "./CompC.css";

const CompC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filterCards = (card) => {
    return card.title.toLowerCase().includes(searchText.toLowerCase());
  };

  return (
    <>
      <div className="whole">
        <h2><span>Development </span>Boards </h2>
        <hr className="n" />

        <input
          className="search"
          type="text"
          placeholder="Search Your Board"
          value={searchText}
          onChange={handleSearch}
        />
        <div className="all">
          {[
            {SNo:'One', img: pic1, title: 'FIRE BIRD V ATMEGA2560', description: 'SmartElex ATMEGA2560 Development Board is a powerful development platform based on ATMEGA2560. This board is ideal for developing embedded applications involving high-speed wireless communication, USB-based data logging, real-time data monitoring, and control etc.' },
            {SNo:'Two', img: pic2, title: 'ESP8266 Development Board', description: 'Espressif’s ESP8266EX delivers highly integrated Wi-Fi SoC solution to meet users’ continuous demands for efficient power usage, compact design and reliable performance in the Internet of Things industry.' },
            {SNo:'Three', img: pic3, title: 'ESP32 Development Board', description: 'The ESP32 is a low-cost, low-power system-on-a-chip (SoC) developed by Espressif Systems. It combines Wi-Fi and dual-mode Bluetooth capabilities, making it suitable for a wide range of applications such as mobile devices, wearable electronics, and IoT projects.' },
            {SNo:'Four', img: pic4, title: 'LPC2148 Development Board', description: 'LPC2148 Pro Development Board is a powerful development platform based on LPC2148 ARM7TDMI microcontroller with 512K on-chip memory. This board is ideal for developing embedded applications involving high speed wireless communication, USB based data logging, interactive control panels etc. ' },
            {SNo:'Five', img: pic5, title: 'ATmega2560 Development Board', description: 'P89V51RD2 Development Board is a low cost development board which have all the basic components needed for gaining a headstart on your first 8051 microcontroller projects. It is made from double sided PTH PCB board to provide extra strength to the connector joints for increased reliability. Board can work on 7 to 15V AC or DC supply.' },
            {SNo:'Six' ,img: pic6, title: 'P89V51RD2 Development Board', description: 'P89V51RD2 Development Board is a low cost development board which have all the basic components needed for gaining a headstart on your first 8051 microcontroller projects. It is made from double sided PTH PCB board to provide extra strength to the connector joints for increased reliability.' },
            {SNo:'Seven', img: pic7, title: 'Raspberry-Pi 3 model B+', description: 'Powered by a 64-bit quad-core ARM Cortex-A53 CPU running at 1.4 GHz. Features 1GB of LPDDR2 RAM for smooth multitasking and running applications.' },
            {SNo:'Eight', img: pic8, title: 'Altera Cyclone IV FPGA DE0-Nano', description: 'The DE0-Nano board introduces a compact-sized FPGA development platform suited for to a wide range of portable design projects, such as robots and mobile projects.' },
            {SNo: 'Nine',img: pic9, title: 'STM32 Nucleo boards', description: 'The STM32 Nucleo board provides an affordable and flexible way for users to try out new ideas and build prototypes with any STM32 microcontroller line, choosing from the various combinations of performance, power consumption and features.' },
            {SNo:'Ten', img: pic10, title: 'Tiva Launchpad', description: 'The TM4C123G LaunchPad evaluation kit is a low-cost evaluation platform for Arm Cortex-M4F based microcontrollers(MCUs).' }

          ].filter((card) => filterCards(card)).map((card, index) => (
            <div key={index} className="comp">
              <Link to={`/${card.SNo}`} >
                <img className='ccompimg' src={card.img} alt={card.title} />
              </Link>
              <h2 className='titlecomp'>{card.title}</h2>
              <div className="onlyw">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompC;
