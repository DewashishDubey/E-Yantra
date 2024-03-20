import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img1.jpeg';
import "./One.css";
function One() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topnam">FIRE BIRD V ATMEGA2560</h1>
        <img className="topimg" src={pic1} alt="" />
       <div className="allone">
        <div className="left">
          <h2 className="titleon">
          Microcontroller
          <br />  <br />  <br />  <br />
        Sensors   <br />  <br />  <br />  <br />
        Indicators  <br />  <br />  <br />
        Communication  <br />  <br />  <br />  <br />
        <div className="pb">Power  <br />  <br />  <br />  
        Battery Life</div>
          </h2>
       
        </div>
       <div className="line"></div>
        <div className="right">

<p className="onemai">Atmel ATMEGA2560 as Master microcontroller (AVR architecture based
Microcontroller), Atmel ATMEGA8 as Slave microcontroller (AVR architecture based
Microcontroller)
<br />
<br /><br />

Three white line sensors (extendable to 7), Five Sharp GP2Y0A02YK IR range sensor
Eight analog IR proximity sensors, Two position encoders (extendable to four), Battery
voltage sensing, Current Sensing, Five MaxBotix Ultrasonic Range Sensors.
<br />
<br /><br />
2 x 16 Characters LCD, Buzzer and Indicator LEDs Control Autonomous Control, PC as
 Master and Robot as Slave in wired or wireless mode
 <br />
 <br /><br />
USB Communication, Wired RS232 (serial) communication, Wireless ZigBee
Communication (2.4GHZ) (if XBee wireless module is installed), Wi-Fi communication
(if Wi-Fi module is installed), Bluetooth communication (if Bluetooth wireless module is
installed), Simplex infrared communication (From infrared remote to robot)
<br /><br /><br />
9.6V Nickel Metal Hydride (NiMH) battery pack and external Auxiliary power from
battery charger. On Board Battery monitoring and intelligent battery charger.
<br />  <br />  <br />2 Hours, while motors are operational at 75% of time.</p>
        </div>
        </div>
        <Footer />
        </div>
    </>
  )
}
export default One