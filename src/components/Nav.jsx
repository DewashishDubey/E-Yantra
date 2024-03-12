import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoimg from '../assets/Logo.png';
import logoimg1 from '../assets/Logo1.png';

import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) { // Adjust the value according to when you want the change to occur
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <img
              src={logoimg}
              className="logoimg"
              alt="Description of the Image"
            />
            <div className="divider"></div>
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
                <NavLink to='/'>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/comp" onClick={toggleMenu}>
                  Components
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/gallery" onClick={toggleMenu}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <a href="#footer" onClick={toggleMenu}>
                  Contact Us
                </a>
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
