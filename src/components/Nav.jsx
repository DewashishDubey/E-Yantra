import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logoimg from '../assets/Logo.png';
import logoimg1 from '../assets/Logo1.png';
import './Nav.css';
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for dropdown
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = (e) => {
    if (
      !e.target.closest('.dropdown') && // Check if click target is not inside the dropdown
      !e.target.closest('.dropdown-menu') && // Check if click target is not inside the dropdown menu
      isDropdownOpen // Check if the dropdown is open
    ) {
      setIsDropdownOpen(false); // Close dropdown
    }
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
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add event listener for clicks on document
    document.addEventListener('click', closeDropdown);

    // Cleanup function
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isDropdownOpen]); // Add isDropdownOpen as a dependency to the useEffect

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
              <li>
                <NavLink to="/project" onClick={toggleMenu}>
                  Project
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
