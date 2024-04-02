import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img3.jpg';
import "./One.css";
function Three() {
  return (
    <>  <div className="body">
      <Nav />
      <h1 className="topna">ESP32 Development Board</h1>
      <img className="topimg" src={pic1} alt="" />

    <h2>Description</h2>
    <p>The ESP32 is a low-cost, low-power system-on-a-chip (SoC) developed by Espressif Systems.
It combines WiFi and dual-mode Bluetooth capabilities, making it suitable for a wide range of applications such as mobile devices, wearable electronics, and IoT projects. Key features and specifications of the ESP32 include:</p>
    <h2>Processors</h2>
    <p>Dual-core or single-core Tensilica Xtensa LX6 microprocessor with clock frequencies up to 240 MHz.</p>
    <h2>Wireless Connectivit</h2>
    <p>Wi-Fi 802.11 b/g/n/e/i (up to 150 Mbit/s) and Bluetooth v4.2 BR/EDR and Bluetooth Low Energy (BLE).</p>
    <h2>Memory</h2>
    <p>Internal ROM (448 KiB), SRAM (520 KiB), RTC fast SRAM (8 KiB), RTC slow SRAM (8 KiB), and eFuse (1 Kibit).</p>
    <h2>Embedded Flash</h2>
    <p>Available flash memory options: 0 MiB, 2 MiB, or 4 MiB (depending on chip/module variant).
</p>
    <h2>Peripheral Input/Output</h2>
    <p>Rich peripheral interface with support for capacitive touch, ADCs, DACs, I²C, UART, CAN 2.0, SPI, I²S, RMII, PWM, and more.</p>
    <h2>Security</h2>
    <p>IEEE 802.11 standard security features, secure boot, flash encryption, and cryptographic hardware acceleration.
</p>
    <h2>Power Efficiency </h2>
    <p>Power-saving features, including fine resolution clock gating, multiple power modes, and dynamic power scaling.</p>

      <Footer />
    </div >
    </>
  )
}
export default Three