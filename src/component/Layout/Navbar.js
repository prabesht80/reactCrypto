import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaMinus } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  // hamburger menu toggle on click
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar-container">
      <div className="navbarLinks">
        <h2>CRYPTO</h2>
        {/* line */}
        <span></span>
        {/* toggle between show hide responsive condition */}
        <ul className={click ? 'links-change' : 'links'}>
          <li>
            <a href="#">Exchange</a>
          </li>
          <li>
            <a href="#">Buy Crypto</a>
          </li>
          <li>
            <a href="#">Market</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
        </ul>
      </div>
      <div className="loginLinks">
        <button> Login</button>
        <button>Register</button>
      </div>
      {/* toggle between hamburger */}
      <div className="mobileIcon" onClick={handleClick}>
        {click ? <FaMinus /> : <FaBars />}
      </div>
    </div>
  );
}

export default Navbar;
