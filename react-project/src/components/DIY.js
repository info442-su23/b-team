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
      <section className="energy-points">
            <p>DIY: Compost Bin</p>
            <Link to="/CompostBin"><img src="/img/compost.png" alt="compost" /></Link>
            <h3>Click to open project</h3>
          </section>
    </body>
  )
};