import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DropdownMenu.css';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNavLink, setSelectedNavLink] = useState('About Us');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (name) => {
    setSelectedNavLink(name);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        {selectedNavLink}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <NavLink to="/" onClick={() => handleNavLinkClick('About Us')}>
            About Us
          </NavLink>
          <NavLink to="/gallery" onClick={() => handleNavLinkClick('Gallery')}>
            Gallery
          </NavLink>
          <NavLink to="/faculty" onClick={() => handleNavLinkClick('Faculty')}>
            Faculty
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
