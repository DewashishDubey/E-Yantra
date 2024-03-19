import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img8.jpg';
import "./Eight.css";

function Eight() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topname">Altera Cyclone IV FPGA DE0-Nano</h1>
        <img className="topimg1" src={pic1} alt="" />

       <div className="allone">
        <div className="left">
          <h2 className="titleone">
          Compact and Portable: <br /><br /><br />Powerful Processing and Memory <br /><br /><br />Rich Set of Features:
</h2>
       
        </div>
       <div className="line"></div>
        <div className="right">

<p className="onemain1">This FPGA development board is ideal for small projects like robots and mobile devices due to its compact size.
<br /><br />
It features a powerful Altera Cyclone IV FPGA with 22,320 logic elements, 32 MB of SDRAM, and 2 Kb EEPROM for efficient processing and data storage. Additionally, it includes a 64 Mb serial configuration memory device.
<br /><br /><br />
Connectivity: Built-in USB Blaster for programming, expansion headers for daughter cards and external devices. <br />
Sensors: National Semiconductor 8-channel 12-bit A/D converter and Analog Devices 13-bit 3-axis accelerometer for real-world interaction. <br />
User I/O: 2 pushbuttons, 8 LEDs, and 4 dip-switches for user control and feedback. <br />
Power: Can be powered via USB or an external source.</p>
        </div>
        </div>
        <Footer />
        </div>
    </>
  )
}
export default Eight