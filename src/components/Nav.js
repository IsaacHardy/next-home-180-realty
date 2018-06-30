import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

// eslint-disable-next-line
const Nav = ({ sticky }) => (
  <nav id="nav" className={sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">Introduction</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">First Section</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Second Section</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="cta">
          <a href="#">Get Started</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
);

export default Nav;