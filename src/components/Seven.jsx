import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img7.jpg';
import "./Seven.css";

function One() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topname">Raspberry-Pi 3 model B+</h1>
        <img className="topimg" src={pic1} alt="" />

       <div className="allone">
        <div className="left">
          <h2 className="titleone">
          About the board
        
         
                    </h2>
       
        </div>
       <div className="line"></div>
        <div className="right">

<p className="onemain">  Powered by a 64-bit quad-core ARM Cortex-A53 CPU running at 1.4 GHz.   <br />
 
Features 1GB of LPDDR2 RAM for smooth multitasking and running applications.  <br />
 
Includes built-in 2.4 GHz and 5 GHz IEEE 802.11ac wireless LAN for fast Wi-Fi connectivity.  <br />
 
Equipped with a 10/100/1000 Ethernet port for wired networking.  <br />
 
Supports Bluetooth 4.2/BLE for wireless communication.  Offers four USB 2.0 ports for connecting peripherals.  <br />
  
Uses a microSD card for storage, providing flexibility in capacity and operating system choices.  <br />
  
Provides full-size HDMI and composite video ports for display connectivity.   <br />
 
Supports HD video playback (1080p) and includes a 3.5mm audio jack for audio output.  <br />

 Features a 40-pin GPIO header for interfacing with electronic components.  <br />
 
Compatible with various operating systems, including Raspberry Pi OS, Ubuntu, and other Linux distributions.  <br /> 
 
Can also run Windows 10 IoT Core.
  <br />

Powered by a 5V micro USB power supply (2.5A or higher recommended).  <br /> 

Widely adopted in educational settings and popular among hobbyists and makers for diverse projects such as home automation, media centers, robotics, or IoT projects.
</p>
        </div>
        </div>
        <Footer />
        </div>
    </>
  )
}
export default One