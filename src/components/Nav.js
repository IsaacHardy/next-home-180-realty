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
        <Scroll type="id" element="culture">
          <a href="#">Culture</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="office">
          <a href="#">Office</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="benefits">
          <a href="#">Benefits</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="tech">
          <a href="#">Technology & Marketing</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="inside">
          <a href="#">Inside NextHome</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
);

export default Nav;
