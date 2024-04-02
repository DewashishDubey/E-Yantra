import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img8.jpg';
import "./One.css";

function Eight() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topna">Altera Cyclone IV FPGA DE0-Nano</h1>
        <img className="topimg" src={pic1} alt="" />
<h2>Compact and Portable</h2>
<p>This FPGA development board is ideal for small projects like robots and mobile devices due to its compact size.</p>
<h2>Powerful Processing and Memory</h2>
    <p>It features a powerful Altera Cyclone IV FPGA with 22,320 logic elements, 32 MB of SDRAM, and 2 Kb EEPROM for efficient processing and data storage. Additionally, it includes a 64 Mb serial configuration memory device.
</p>  
       <h2>Rich Set of Features</h2> 
       <p>Connectivity: Built-in USB Blaster for programming, expansion headers for daughter cards and external devices.
Sensors: National Semiconductor 8-channel 12-bit A/D converter and Analog Devices 13-bit 3-axis accelerometer for real-world interaction.
User I/O: 2 pushbuttons, 8 LEDs, and 4 dip-switches for user control and feedback.
Power: Can be powered via USB or an external source.</p>
       
       
       
       <Footer />
        </div>
    </>
  )
}
export default Eight