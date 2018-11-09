import React from 'react';
// import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import Header from '../components/Header';
import Nav from '../components/Nav';
// import FixedBackground from '../components/FixedBackground';
// import background from '../assets/images/overlay.png';
// import officeImage from '../assets/images/pic01.jpg';

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
