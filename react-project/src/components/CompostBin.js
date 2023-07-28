import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';

export default function CompostBin() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <section className='heading'></section>
      <article id="compost-diy">
        <section>
          <section className="energy-points">
            <p>DIY: Compost Bin</p>
            <img className="energy" src="/img/compost.png" alt="compost" />
          </section>
          <p>Source: https://www.younghouselove.com/younghouselovedotcompost/</p>
        </section>
        <section>
          <h1>COMPOST BIN DIY</h1>
          <p>What you need:</p>
          <ul className='compost-list'>
            <li>10 Scoops of Dirt</li>
            <li>1 Plastic Storage Box</li>
            <li>Shovel</li>
            <li>Leaves</li>
            <li>Water</li>
            <li>Drill</li>
            <li>Jar with Lid</li>
          </ul>
        </section>
      </article>
    </body>
  )
};