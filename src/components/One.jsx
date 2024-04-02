import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img1.jpeg';
import "./One.css";
function One() {
  return (
    <>  <div className="body">
      <Nav />
      <h1 className="topna">FIRE BIRD V ATMEGA2560</h1>
      <img className="topimg" src={pic1} alt="" />
      <div className="alloe">
          <h2 className="titleon">
          Microcontroller
          </h2>
          <p>Atmel ATMEGA2560 as Master microcontroller (AVR architecture based Microcontroller), Atmel ATMEGA8 as Slave microcontroller (AVR architecture based Microcontroller)
         </p> <h2 className="titleon">
          Sensors
          </h2>
          <p>Three white line sensors (extendable to 7), Five Sharp GP2Y0A02YK IR range sensor Eight analog IR proximity sensors, Two position encoders (extendable to four), Battery voltage sensing, Current Sensing, Five MaxBotix Ultrasonic Range Sensors.
         </p> <h2 className="titleon">
          Indicators  </h2>
          <p>2 x 16 Characters LCD, Buzzer and Indicator LEDs Control Autonomous Control, PC as Master and Robot as Slave in wired or wireless mode</p> <h2 className="titleon"></h2>
          <h2 className="titleon">Communication
</h2>
<p>USB Communication, Wired RS232 (serial) communication, Wireless ZigBee Communication (2.4GHZ) (if XBee wireless module is installed), Wi-Fi communication (if Wi-Fi module is installed), Bluetooth communication (if Bluetooth wireless module is installed), Simplex infrared communication (From infrared remote to robot)
</p>
<h2 className="titleon">Power</h2>
       <p>9.6V Nickel Metal Hydride (NiMH) battery pack and external Auxiliary power from battery charger. On Board Battery monitoring and intelligent battery charger.
</p>

<h2 className="titleon">Battery Life</h2> 
<p>2 Hours, while motors are operational at 75% of time.</p>  
   </div>
      <Footer />
    </div>
    </>
  )
}
export default One