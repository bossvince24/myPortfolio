import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1-removebg-preview.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const menuRef = useRef(); // Reference for the menu

  const openMenu = () => {
    menuRef.current.style.right = '0'; // Open the menu
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px'; // Close the menu
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <FaBars className='nav-mob-open' onClick={openMenu} /> {/* Hamburger icon */}
      <ul ref={menuRef} className="nav-menu">
        <FaTimes className='nav-mob-close' onClick={closeMenu} /> {/* Close icon */}
        <li>
          <AnchorLink className='anchor-link' href='#home' onClick={closeMenu}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#about' onClick={closeMenu}>
            About
          </AnchorLink>
        </li>
        {/* <li>
          <AnchorLink className='anchor-link' href='#resume' onClick={closeMenu}>
            Resume
          </AnchorLink>
        </li> */}
        <li>
          <AnchorLink className='anchor-link' href='#experience' onClick={closeMenu}>
            Experience
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#skills' onClick={closeMenu}>
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#contact' onClick={closeMenu}>
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;