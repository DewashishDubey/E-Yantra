import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
      if (offset > 100) { 
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
            <NavLink to={'/'}>
            <img
              src={logoimg}
              className="logoimg"
              alt="Description of the Image"
            />
            </NavLink>
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
              <NavLink to="/faculty" onClick={toggleMenu}>
                  Faculty
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
              <a href="#footer"  onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                  <ScrollLink to="footer" spy={true} smooth={true} duration={900}>
                    Contact Us
                  </ScrollLink>
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
