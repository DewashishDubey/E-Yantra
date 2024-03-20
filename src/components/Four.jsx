import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img4.jpg';
import "./Four.css";

function Four() {
  return (
    <>  <div className="body">
      <Nav />
      <h1 className="topnam">LPC2148 Development Board</h1>
      <img className="topimg" src={pic1} alt="" />
      <div className="allone">
        <div className="left">
          <h2 className="titleone4">
            Microcontroller and Memory
            <br /> <br />
            <div className="niche">
              Versatile Application Support <br />  <br />
              <div className="niche">High-Speed USB Interface  <br /> <br /> <br />
                UART Boot Loader <br />  <br />  <br />  <br />
                On-Board Peripherals </div>
            </div>
          </h2>

        </div>
        <div className="line"></div>
        <div className="right">

          <p className="onema">LPC2148 Pro Development Board is based on the LPC2148 ARM7TDMI microcontroller. <br />
            It features 512KB of on-chip memory, providing a powerful platform for embedded applications.
            <br />
            <br /><br />

            Ideal for a range of embedded applications, including high-speed wireless communication, USB-based data logging, real-time data monitoring and control, and interactive control panels.
            <br />
            <br /><br />
            Equipped with an on-chip USB controller, offering a direct high-speed interface to a PC/laptop with speeds up to 12Mb/s. This facilitates fast and efficient data transfer.
            <br />
            <br /><br />
            Eliminates the need for an additional programmer, allowing programming using the serial port (UART). This enhances the ease of development and programming process.
            <br /><br /><br />
            • SD/MMC card interface, <br />
            • USB2.0 interface,<br />
            • 4Kbit I2C EEPROM, <br />
            • Xbee wireless module interface,<br />
            • ULN2003 500mA current sinking driver, <br />
            • L293D DC motor controller, <br />
            • 16X2 character LCD and many more

          </p>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}
export default Four