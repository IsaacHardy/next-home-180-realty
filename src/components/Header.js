import React from 'react';
import FixedBackground from './FixedBackground';
// import Link from 'gatsby-link';

import logo from '../assets/images/overlay.png';

const Header = () => (
  <header id="header">
    <FixedBackground uri={logo} />
    <div className="spotlight">
      <div className="content">
        <h1 className="header-text">
          JOIN THE MOST INAVETIVE REAL ESTATE COMPANY IN MIDDLE GA
        </h1>
      </div>
    </div>
  </header>
);

export default Header;
