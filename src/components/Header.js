import React from 'react';
import Modal from 'react-modal';
import Iframe from 'react-iframe';
import officeImage from '../assets/images/SignageBackground.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }
  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  };
  render() {
    return (
      <header id="header" className="dimmed">
        <div className="spotlight">
          <div id="start" className="content">
            <h1>THE FUTURE IN REAL ESTATE</h1>
            <p>
              Our company culture speaks to who we are, the type of agent we
              attract, and how we are perceived by the consumer of real estate
              services. We focus on what is really needed to successfully
              partner with an agent to assure their success. That is,
              client-centric marketing, comprehensive technologies, automated
              systems and an inspirational culture.
            </p>
            <p>
              Our comprehensive proprietary platform puts the latest technology
              at your fingertips, all in one place. Our multi-faceted approach
              to training and support is designed to make all things easier for
              today’s busy agent. Our all inclusive business model is affordable
              and flexible.
            </p>
          </div>
          <span className="image">
            <img src={officeImage} alt="" />
            <button
              style={{
                color: 'red',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                height: '100%',
                width: '100%',
                top: '50%',
                left: '50%',
                borderRadius: '50%',
              }}
              onClick={this.openModal}
            >
              <span
                className="icon fa-play fa-5x style1"
                style={{ verticalAlign: 'middle' }}
              />
            </button>
          </span>
        </div>
        <div className="spotlight">
          <div id="culture" className="content">
            <h1>THE FUTURE IN REAL ESTATE</h1>
            <p>
              Our company culture speaks to who we are, the type of agent we
              attract, and how we are perceived by the consumer of real estate
              services. We focus on what is really needed to successfully
              partner with an agent to assure their success. That is,
              client-centric marketing, comprehensive technologies, automated
              systems and an inspirational culture.
            </p>
            <p>
              Our comprehensive proprietary platform puts the latest technology
              at your fingertips, all in one place. Our multi-faceted approach
              to training and support is designed to make all things easier for
              today’s busy agent. Our all inclusive business model is affordable
              and flexible.
            </p>
          </div>
          <span className="image">
            <img src={officeImage} alt="" />
            <button
              style={{
                color: 'red',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                height: '100%',
                width: '100%',
                top: '50%',
                left: '50%',
                borderRadius: '50%',
              }}
              onClick={this.openModal}
            >
              <span
                className="icon fa-play fa-5x style1"
                style={{ verticalAlign: 'middle' }}
              />
            </button>
          </span>
        </div>
        <div className="spotlight">
          <div id="test" className="content">
            <h1>THE FUTURE IN REAL ESTATE</h1>
            <p>
              Our company culture speaks to who we are, the type of agent we
              attract, and how we are perceived by the consumer of real estate
              services. We focus on what is really needed to successfully
              partner with an agent to assure their success. That is,
              client-centric marketing, comprehensive technologies, automated
              systems and an inspirational culture.
            </p>
            <p>
              Our comprehensive proprietary platform puts the latest technology
              at your fingertips, all in one place. Our multi-faceted approach
              to training and support is designed to make all things easier for
              today’s busy agent. Our all inclusive business model is affordable
              and flexible.
            </p>
          </div>
          <span className="image">
            <img src={officeImage} alt="" />
            <button
              style={{
                color: 'red',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                height: '100%',
                width: '100%',
                top: '50%',
                left: '50%',
                borderRadius: '50%',
              }}
              onClick={this.openModal}
            >
              <span
                className="icon fa-play fa-5x style1"
                style={{ verticalAlign: 'middle' }}
              />
            </button>
          </span>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayClassName="dimmed"
          style={{
            overlay: { position: 'absolute' },
            content: {
              position: 'relative',
              display: 'block',
              height: '100vh',
              width: '100vw',
              top: 0,
              left: 0,
            },
          }}
        >
          <span className="video">
            <Iframe
              url="https://player.vimeo.com/video/120744081?theme=none&amp;wmode=opaque&amp;autoplay=1"
              allowFullScreen
              display="block"
              height="100%"
              width="100%"
              styles={{
                position: 'fixed',
                zIndex: 10000000,
                top: '50%',
                left: '50%',
                width: '85vw',
                height: '85vh',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </span>
        </Modal>
        <button
          className="closeButton"
          style={{
            display: this.state.modalIsOpen ? 'block' : 'none',
          }}
          onClick={this.closeModal}
        >
          Close
        </button>
      </header>
    );
  }
}

export default Header;
