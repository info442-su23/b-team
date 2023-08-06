import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BackButton from './GoBackButton';

export default function SeedSelect() {
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [showOutline, setShowOutline] = useState(false);

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  const submitClick = () => {
    setCookie('experience', 0, 365)
  }

  const showStartButton = () => {
    setShowSubmitButton(true)
    setShowOutline(true)
  }

  return (
    <body className="seed-select-page" >
      <div className="back-container">
        <a href="#" className="back-arrow"><BackButton /></a>
      </div>
      <hr className="seed" />
      <h1 className="seed-levels">easy</h1>
      <div className="container-easy">
        <div className="box-opaque" onClick={ showStartButton }>
          <img src="img/seed.jpeg" className={showOutline ? "seed-select selected" : "seed-select"} />
        </div>
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
      </div>
      <hr className="seed" />
      <h1 className="seed-levels">medium</h1>
      <div className="container-med">
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
      </div>
      <hr className="seed" />
      <h1 className="seed-levels">hard</h1>
      <div className="container-hard">
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
      </div>
      <div className="start-button-seed">
        {showSubmitButton && (
          <button
          className="next-button-seed"
          onClick={ submitClick }
          ><Link to="/home">Start</Link></button>
        )}
      </div>
    </body>
  );
};