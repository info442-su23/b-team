import React from 'react';
import { Link } from "react-router-dom";
import BackButton from './GoBackButton';

export default function SeedSelect() {
  return (
    <body className="seed-select-page" >
      <div className="back-container">
        <a href="#" className="back-arrow"><BackButton /></a>
      </div>
      <hr className="seed" />
      <h1 className="seed-levels">easy</h1>
      <div className="container-easy">
        <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
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
        <button className="next-button-seed"><Link to="/home">Start</Link></button>
      </div>
    </body>
  );
};
