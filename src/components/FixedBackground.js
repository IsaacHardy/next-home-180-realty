import React from 'react';

// eslint-disable-next-line
const FixedBackground = ({ uri, text }) => (
  <div
    style={{
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10em',
    }}
  >
    <div
      className="fixed-background"
      style={{ backgroundImage: `url(${uri})` }}
    />
    <h1
      style={{
        position: 'relative',
        color: 'white',
        border: '5px solid white',
        padding: '.5em',
        fontWeight: '800',
      }}
    >
      {text}
    </h1>
  </div>
);

export default FixedBackground;
