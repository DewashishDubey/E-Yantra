import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoimg from '../assets/Logo.png';
import logoimg1 from '../assets/Logo1.png';
import logoimg2 from '../assets/Logo2.jpg';

import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <div className="logo">
            <img
              src={logoimg}
              className="logoimg"
              alt="Description of the Image"
            />
            <img
              src={logoimg2}
              id="logoim1"
              className="logoimg"
              alt="Description of the Image"
              />
            <a href='https://www.srmist.edu.in/'>
            <img
              src={logoimg1}
              id="logoim"
              className="logoimg"
              alt="Description of the Image"
              />
              </a>
          </div>
          <div className={`nav-elements ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={toggleMenu}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  Components
                </NavLink>
              </li>
              <li>
                <NavLink to="/components" onClick={toggleMenu}>
                  Staff
                </NavLink>
              </li>
              <li>
                <NavLink to="/staff" onClick={toggleMenu}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" onClick={toggleMenu}>
                  Contact Us
                </NavLink>
              </li>

            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
