import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import Header from '../components/Header';
import Nav from '../components/Nav';
import officeImage from '../assets/images/pic01.jpg';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
    };
  }

  handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Nav sticky={this.state.stickyNav} />
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        />

        <Header />

        <div id="main">
          <section id="culture" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>OUR CULTURE</h2>
                </header>
                <p>
                  We believe in a simple formula: Hire top-notch people. Train
                  and support them. And provide all the latest tools and
                  technology.
                  <br />
                  <br />
                  Our culture is reflective of this philosophy – our branding
                  and marketing is designed for today’s consumer, we encourage
                  collaboration, and celebrate the unique strengths and talents
                  of our agents. Teamwork is promoted, as it is our belief that
                  when we work together we can accomplish so much more!
                  <br />
                  <br />
                  Cutting-edge technology, support & training, and teamwork mean
                  that NextHome 180° Realty agents have a better, balanced life.
                  It is just that simple.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="video">
                <iframe
                  src="https://player.vimeo.com/video/120744081?theme=none&amp;wmode=opaque"
                  width="760"
                  height="428"
                  frameBorder="0"
                  title="NextHome Products &amp; Services"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowFullScreen=""
                />
              </span>
            </div>
          </section>

          <section id="office" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>OUR OFFICE</h2>
                </header>
                <p>
                  We support the on-the-go agent with a multitude of mobile
                  resources. Our agents are fully equipped to meet their
                  client’s needs anywhere!
                  <br />
                  <br />
                  Yet when it is time to meet a client, make a few phone calls,
                  or prepare a presentation, we also offer an office that is
                  lean, efficient and productive with a great work environment
                  and culture. Our in-office resources include workstations, a
                  printing and material creation station, a conference room, a
                  closed office for private meetings, and a plush lounge for
                  casual get-togethers.
                  <br />
                  <br />
                  The design is fresh, clean and modern. And meeting clients
                  here will speak volumes about you and your real estate
                  business.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={officeImage} alt="" />
              </span>
            </div>
          </section>

          <section id="benefits" className="main special">
            <header className="major">
              <h2>OUR BENEFITS</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-money" />
                <h3>Savings</h3>
                <p>
                  Our agent’s return on investment, along with superior
                  technology, lower royalty and service fees, vendor selections,
                  and other services are all designed to substantially drive
                  down the costs for agents to pursue their careers.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-usd" />
                <h3>AFFORDABLE & FLEXIBLE ALL-INCLUSIVE FEES</h3>
                <p>
                  Our Agent Fee Structure is as simple as you can get. We offer
                  two models: a monthly flat rate fee, or a gross commission
                  income fee, with the ability to change plans every six months.
                  In either case, there are no surprises. And never any desk,
                  office, E&O, or any other fees. Period.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-gift" />
                <h3>FREE BUSINESS CARDS & SIGN</h3>
                <p>
                  When you join us, we provide you with your first order of
                  company business cards as well as your first sign.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-graduation-cap" />
                <h3>SUPPORT & EDUCATION, TRAINING & MENTORING</h3>
                <p>
                  Knowledge is power and essential to your success. Weekly
                  trainings and education sessions are accessible both in-office
                  and remotely. In addition there are online training videos,
                  webinars and publications to improve your abilities and
                  increase your income. And for brand new agents, we offer a
                  mentoring program to develop the knowledge and confidence
                  before you go off on your own.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-user" />
                <h3>CONSUMER-CENTRIC BRAND</h3>
                <p>
                  Design and branding created with consumers at the core.
                  Connect and resonate with your clients through a fresh
                  culture, enticing design and meaningful brand.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-wifi" />
                <h3>NO FLOOR TIME</h3>
                <p>
                  Aside from referrals, in many cases, buyers and sellers find
                  their prospective agents online. That is where you should be
                  to greet them. Our programs assure agents a strong social
                  media presence to ensure they are found.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-mobile" />
                <h3>MOBILE TECHNOLOGY</h3>
                <p>
                  Life is on the move and real estate happens everywhere.
                  Transact, market, and execute your business anywhere, anytime.
                  And to make it even easier, our technology, advertising,
                  marketing and training are all integrated … and part of the
                  package. Experience a comprehensive platform and full set of
                  easy–to-use services all in one place.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-users" />
                <h3>COLLABORATIVE ENVIRONMENT</h3>
                <p>
                  We are stronger together. Be a market and prospecting expert
                  by sharing ideas, trying new practices and staying current for
                  a thriving business tomorrow.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-rss" />
                <h3>FREE EXCLUSIVE LEADS</h3>
                <p>
                  Our leads are generated from a variety of sources that we
                  provide, including our website, the Featured Listings program,
                  Mobile Connect, Reach150, real estate property website
                  profiles, social media, and local marketing tailored to Orange
                  County. We are about providing quality leads, not quantity or
                  time-consuming leads.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="tech" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork" />
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o" />
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal" />
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop" />
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="inside" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

export default Index;

// eslint-disable-next-line
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
