import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';

export default function DIY() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
    </body>
  )
};