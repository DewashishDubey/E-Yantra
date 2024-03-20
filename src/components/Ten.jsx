import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img10.jpg';
import "./Ten.css";

function Ten() {
    return (
        <>  <div className="body">
            <Nav />
            <h1 className="topna">Tiva Launchpad</h1>
            <img className="topimg" src={pic1} alt="" />

            <div className="allone">
                <div className="left">
                    <h2 className="titleone">
                        Microcontroller Specifications
                        <br />  <br />  <br />  <br /><br />  <br />

                       <div className="lpdc">LaunchPad Design and Connectivity  <br />  <br /><br />  <br /><br />  <br />
                        Software Development
                        Support <br /><br /><br />  <br /><br />  <br />
                     Features</div> 
                    </h2>

                </div>
                <div className="line"></div>
                <div className="right">

                    <p className="onema">The TM4C123G LaunchPad is equipped with a powerful Arm Cortex-M4F microcontroller running at 80 MHz, delivering efficient performance. Its substantial 256kB flash memory and 32kB SRAM provide ample storage and memory capabilities. The microcontroller supports integrated USB 2.0, catering to various USB functionalities, including host, device, and on-the-go. Two 12-bit analog-to-digital converter modules enhance its capability to capture analog signals, and versatile serial communication channels such as UART, SPI, I2C, and CAN contribute to its overall versatility. Additional features like hibernation and PWM modules further augment its comprehensive functionality.<br />
                        <br /><br />

                        Crafted as a cost-effective evaluation platform, the TM4C123G LaunchPad boasts a user-friendly design with programmable user buttons and an RGB LED for customization. The stackable headers facilitate seamless connectivity to BoosterPack plug-in modules, allowing for easy expansion of the LaunchPad's functionality. This thoughtful design ensures compatibility with the Texas Instruments BoosterPack ecosystem, providing a diverse array of additional modules for extended capabilities. Whether for beginners or experienced developers, the LaunchPad's intuitive design offers flexibility and expandability, making it a preferred choice for various projects.
                        <br />
                        <br /><br />
                        Supported by the TI-developed TivaWare SDK, the TM4C123G LaunchPad streamlines the software development process. The SDK includes drivers for all peripherals, simplifying the integration of various features into projects. Moreover, it provides example code for numerous applications, enabling developers to swiftly implement functionalities and accelerate their development cycles. This robust software support enhances the LaunchPad's appeal, particularly for those seeking a comprehensive development environment. As a result, the TM4C123G LaunchPad proves to be an ideal choice across a wide spectrum of projects and applications.
                        <br />
                        <br /><br />



                        The ARM Cortex-M4F Based MCU TM4C123G LaunchPad valuation Kit (EK-TM4C123GXL) offers these features: 

                        High Performance TM4C123GH6PM MCU:    <br />

                        80MHz 32-bit ARM Cortex-M4-based microcontrollers CPU    <br />
                        256KB Flash, 32KB SRAM, 2KB EEPROM    <br />
                        Two Controller Area Network (CAN) modules    <br />
                        (requires CAN  transceivers)    <br />
                        USB 2.0 Host/Device/OTG + PHY o Dual 12-bit   <br />
                        2MSPS ADCs, motion control PWMs    <br />
                        8 UART, 6 I2C, 4 SPI    <br />

                        On-board In-Circuit Debug Interface (ICDI)     <br />

                        USB Micro-B plug to USB-A plug cable    <br />

                        Preloaded RGB quick-start application    <br />

                        ReadMe First quick-start guide</p>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}
export default Ten