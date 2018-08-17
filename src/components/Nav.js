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
    <Scrollspy
      items={['culture', 'office', 'benefits', 'tech', 'inside']}
      currentClassName="is-active"
    >
      <div id="bracket" />
      <li>
        <Scroll type="id" element="culture" offset={-104}>
          <a href="#">Culture</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="office" offset={-104}>
          <a href="#">Office</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="benefits" offset={-14}>
          <a href="#">Benefits</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="tech" offset={-14}>
          <a href="#">Technology & Marketing</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="inside" offset={-14}>
          <a href="#">Inside NextHome</a>
        </Scroll>
      </li>
      <div id="arrow" />
    </Scrollspy>
  </nav>
);

export default Nav;
