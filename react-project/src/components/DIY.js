import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function DIY() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <h1>Unlocked DIY Projects</h1>
      {/* ?need a card with the image for diy compost bin  */}
      <p>Click to open project</p>
    </body>
  )
};