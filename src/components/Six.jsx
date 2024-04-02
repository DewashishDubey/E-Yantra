import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img6.jpg';
import "./One.css";

function Six() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topna">P89V51RD2 Development Board</h1>
        <img className="topimg" src={pic1} alt="" />

       <h2>Budget-Friendly Learning Platform</h2>
       <p>Designed for beginners learning 8051 microcontrollers. Offers basic features like power supply, connectivity, programming, and controls. Made from double-sided PCB for robust construction
</p>
       <h2>Essential Functionalities


</h2>
       <p>Operates on 7-15V AC/DC power with reverse polarity protection. Provides standard 10-pin FRC connectors and open pads for external connections. Features RS232 interface with DB9 connector for programming and communication. Includes reset and power switches for user control.</p>
       <h2>Expendability</h2>
       <p>❑ 8-bit microcontrollers with 80C51 core <br />
❑ 64 kB of on-chip Flash program memory with ISP (In-System Programming) and IAP (In-Application Programming) <br />
❑ Supports 12-clock (default) or 6-clock mode selection via software or ISP <br />
❑ SPI (Serial Peripheral Interface) and enhanced UART <br />
❑ PCA (Programmable Counter Array) with PWM and Capture/Compare functions <br />
❑ Four 8-bit I/O ports with three high-current Port 1 pins (16 mA each) <br />
❑ Three 16-bit timers/counters <br />
❑ Programmable Watchdog timer (WDT) <br />
❑ Eight interrupt sources with four priority levels <br />
❑ Second DPTR register <br />
❑ Low EMI mode (ALE inhibit) <br />
❑ TTL- and CMOS-compatible logic levels <br />
❑ Brown-out detection <br />
❑ Low power modes</p>
        <Footer />
        </div>
    </>
  )
}
export default Six