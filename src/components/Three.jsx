import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img3.jpg';
import "./Three.css";

function One() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topname">ESP32 Development Board</h1>
        <img className="topimg" src={pic1} alt="" />

       <div className="allone">
        <div className="left">
          <h2 className="titleone">
          Description
          <br />  <br />  <br />  <br />
          Processors <br />  <br />  
          Wireless Connectivity  <br />  <br /> 
          Memory <br />  <br />  <br />  
          Embedded Flash <br />  <br />   
          Peripheral Input/Output<br />  <br /> <br /> <br /> 
          Security <br /><br />
          Power Efficiency
                    </h2>
       
        </div>
       <div className="line"></div>
        <div className="right">

<p className="onemain">The ESP32 is a low-cost, low-power system-on-a-chip (SoC) developed by Espressif Systems. <br />It combines WiFi and dual-mode Bluetooth capabilities, making it suitable for a wide range of applications such as mobile devices, wearable electronics, and IoT projects. Key features and specifications of the ESP32 include:
<br />
<br /><br />

Dual-core or single-core Tensilica Xtensa LX6 microprocessor with clock frequencies up to 240 MHz.
<br />
<br /><br />
Wi-Fi 802.11 b/g/n/e/i (up to 150 Mbit/s) and Bluetooth v4.2 BR/EDR and Bluetooth Low Energy (BLE).
 <br />
 <br /><br />

 Internal ROM (448 KiB), SRAM (520 KiB), RTC fast SRAM (8 KiB), RTC slow SRAM (8 KiB), and eFuse (1 Kibit).
<br /><br /><br />
Available flash memory options: 0 MiB, 2 MiB, or 4 MiB (depending on chip/module variant).

<br />
<br /><br />
Rich peripheral interface with support for capacitive touch, ADCs, DACs, I²C, UART, CAN 2.0, SPI, I²S, RMII, PWM, and more.
<br /><br /><br />IEEE 802.11 standard security features, secure boot, flash encryption, and cryptographic hardware acceleration.
<br /><br /><br />
Power-saving features, including fine resolution clock gating, multiple power modes, and dynamic power scaling.</p>
        </div>
        </div>
        <Footer />
        </div>
    </>
  )
}
export default One