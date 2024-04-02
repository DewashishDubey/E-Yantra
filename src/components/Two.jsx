import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img2.jpg';
import "./One.css";
function Two() {
  return (
    <>  <div className="body">
      <Nav />
      <h1 className="topna">ESP8266 Development Board</h1>
      <img className="topimg" src={pic1} alt="" />
      <div className="alloen">

        <h2 className="titleon">
          Versatile Wi-Fi Solution </h2>
        <p>ESP8266EX addresses user demands for efficient power usage, compact design, and reliable performance in the Internet of Things (IoT) industry, providing a highly integrated Wi-Fi System-on-Chip (SoC) solution.
        </p>

        <h2 className="titleon">
          Flexible Application Modes
        </h2>
        <p>
          Capable of operating as a standalone application or as a slave to a host Microcontroller Unit (MCU), offering adaptability in diverse IoT scenarios. When hosting an application, it boots up promptly from the flash, and the integrated high-speed cache enhances system performance and optimizes memory.
        </p>
        <h2 className="titleon">
          Comprehensive Integration and SDK Support
        </h2>
        <p>
          Integrates antenna switches, RF balun, power amplifier, low noise receive amplifier, filters, and power management modules in a compact design, minimizing PCB size and external circuitry requirements. Additionally, ESP8266EX features an enhanced version of Tensilica’s L106 Diamond series 32-bit processor, on-chip SRAM, and supports external sensor interfacing through GPIOs. The inclusion of a Software Development Kit (SDK) with sample codes facilitates the development of various applications
        </p>




      </div>


      <Footer/>

    </div>
   

    </>
  )
}
export default Two