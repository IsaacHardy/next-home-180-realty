import smoothscroll from 'smoothscroll-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Element = (props) => props.children;

class Scroll extends Component {
  static propTypes = {
    type: PropTypes.string,
    element: PropTypes.string,
    offset: PropTypes.number,
    timeout: PropTypes.number,
    children: PropTypes.node.isRequired,
  };
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    smoothscroll.polyfill();
  }
  handleClick(e) {
    e.preventDefault();
    let elem = 0;
    let scroll = true;
    const { type, element, offset, timeout } = this.props;
    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0]; // eslint-disable-line
          scroll = !!elem;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = !!elem;
          break;
        default:
      }
    }
    scroll // eslint-disable-line
      ? this.scrollTo(elem, offset, timeout) // eslint-disable-line
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  }
  // eslint-disable-next-line
  scrollTo(element, offSet = 0, timeout = null) {
    const elemPos = element
      ? element.getBoundingClientRect().left + window.pageXOffset
      : 0;

    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: 0, left: elemPos + offSet, behavior: 'smooth' });
      }, timeout);
    } else {
      window.scroll({ top: 0, left: elemPos + offSet, behavior: 'smooth' });
    }
  }
  render() {
    return (
      <Element>
        {typeof this.props.children === 'object' ? (
          React.cloneElement(this.props.children, { onClick: this.handleClick })
        ) : (
          <span onClick={this.handleClick}>{this.props.children}</span> // eslint-disable-line
        )}
      </Element>
    );
  }
}

export default Scroll;
