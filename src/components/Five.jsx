import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img5.jpg';
import "./Five.css";

function One() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topname">ATmega2560 Development Board</h1>
        <img className="topimg" src={pic1} alt="" />

       <div className="allone">
        <div className="left">
          <h2 className="titleone">
          Microcontroller and Memory
          <br />  <br />    
          Versatile Application Support <br />  <br />  
          High-Speed USB Interface  <br />  <br /> <br />
          UART Boot Loader <br />  <br />  <br />  <br />
          On-Board Peripherals 
         
                    </h2>
       
        </div>
       <div className="line"></div>
        <div className="right">

<p className="onemain"> This board is designed to learn and experiment with the 8051 microcontroller. It provides a platform with essential features for beginners, including power supply, connectivity options (serial, connectors), programming capabilities, and basic controls (reset, power switch).
<br />
<br /><br />

The board offers optional add-ons to enhance its functionality. Users can connect various modules like a wireless adapter, LCD display, SD card reader, and motor drivers, expanding its application possibilities.<br />
<br /><br />
The board is built with a double-sided PCB for stronger connections and a heat sink on the voltage regulator for improved performance and reliability.<br />
 <br /><br />
 ❖ Power: 7 to 15 VDC with Reverse Polarity Protection. <br />
❖ 2.4GHz ZigBee (XBee) wireless module adaptor. <br />
 ❖ 2×16 Character Alphanumeric LCD. <br />
 ❖ SD cardholder. <br />
 ❖ CH340G USB to Serial converter. <br />
 ❖ ESP8255 Adaptor interface with USB to Serial Converter. <br />
. ❖ Connector for 2 servo motors. <br />
 ❖ DS1307 based Real-Time Clock with Battery Backup. <br />
. ❖ ULN2003 7 channel 500mA driver.  <br />
❖ L293D 600mA Dual DC motor Driver. <br />
 ❖ 1 Analog Potentiometers, 8 switches, 8 LEDs, Buzzer.  <br />
❖ Switches: Reset, Power (ON-OFF SWITCH).  <br />
❖ Male Burg Pin Connectors for all ports. <br />

</p>
        </div>
        </div>
        <Footer />
        </div>
    </>
  )
}
export default One