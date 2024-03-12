import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img6.jpg';
import "./Six.css";

function One() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topname">P89V51RD2 Development Board</h1>
        <img className="topimg" src={pic1} alt="" />

       <div className="allone">
        <div className="left">
          <h2 className="titleone">
          Budget-Friendly Learning Platform
          <br />  <br />    
          Essential Functionalities <br />  <br />  <br />
          Expendability
         
                    </h2>
       
        </div>
       <div className="line"></div>
        <div className="right">

<p className="onemain"> Designed for beginners learning 8051 microcontrollers.
Offers basic features like power supply, connectivity, programming, and controls.
Made from double-sided PCB for robust construction<br />
<br /><br />

Operates on 7-15V AC/DC power with reverse polarity protection.
Provides standard 10-pin FRC connectors and open pads for external connections.
Features RS232 interface with DB9 connector for programming and communication.
Includes reset and power switches for user control.<br /><br />
❑ 8-bit microcontrollers with 80C51 core <br />
 ❑ 64 kB of on-chip Flash program memory with ISP (In-System Programming) and IAP (In-Application Programming) <br />
❑ Supports 12-clock (default) or 6-clock mode selection via software or ISP  <br />
❑ SPI (Serial Peripheral Interface) and enhanced UART  <br />
❑ PCA (Programmable Counter Array) with PWM and Capture/Compare functions  <br />
❑ Four 8-bit I/O ports with three high-current Port 1 pins (16 mA each)  <br />
❑ Three 16-bit timers/counters  <br />
❑ Programmable Watchdog timer (WDT) <br />
 ❑ Eight interrupt sources with four priority levels  <br />
❑ Second DPTR register  <br />
❑ Low EMI mode (ALE inhibit)  <br />
❑ TTL- and CMOS-compatible logic levels  <br />
❑ Brown-out detection  <br />
❑ Low power modes

</p>
        </div>
        </div>
        <Footer />
        </div>
    </>
  )
}
export default One