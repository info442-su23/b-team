import React, { useState } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';

export default function CompostBin() {
  const [currentCompost, setCurrentCompost] = useState(1);
  const [imageOnly, setImageOnly] = useState(false);

  const compostImages = [
    '/img/compost-1.png',
    '/img/compost-2.png',
    '/img/compost-3.png',
    '/img/compost-4.png',
    '/img/compost-5.png',
    '/img/compost-6.png',
    '/img/compost-7.png',
    '/img/compost-8.png',
  ];

  const handleNext = () => {
    setImageOnly(true);
    if (currentCompost === compostImages.length) {
      setImageOnly(false);
    }
    setCurrentCompost((prev) => (prev === 8 ? 1 : prev + 1));
  }


  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <section className='heading'></section>
      <article id={ imageOnly ? "hidden" : "compost-diy"}>
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
      {imageOnly && (<img src={compostImages[currentCompost - 1]} alt={`compost-${currentCompost}`}/>
      )}
        <button
          className="next-button-instruction"
          onClick={ handleNext }
        >Next Step <span className="arrow-right-instruction">&#10148;</span>
        </button>
    </body>
  )
};