import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import logo from '../assets/images/logo1.png';

// eslint-disable-next-line
const Nav = ({ sticky }) => (
  <nav id="nav" className={sticky ? 'alt' : ''}>
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <Scrollspy items={['start', 'culture']} currentClassName="is-active">
      <div id="bracket" />
      <li>
        <Scroll type="id" element="start" offset={0}>
          <a href="#">Start</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="culture" offset={0}>
          <a href="#">Culture</a>
        </Scroll>
      </li>
      <div id="arrow" />
    </Scrollspy>
  </nav>
);

export default Nav;
