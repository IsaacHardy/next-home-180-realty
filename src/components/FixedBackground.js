import React from 'react';

// eslint-disable-next-line
const FixedBackground = ({ uri }) => (
  <div
    className="fixed-background"
    style={{ backgroundImage: `url(${uri})` }}
  />
);

export default FixedBackground;
