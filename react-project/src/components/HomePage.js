import React from 'react';
import NavBar from './Nav';

export default function HomePage() {

  function getCookie(name) {
    const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return value ? value.pop() : '';
  }

  function updatePlant(progress) {
    let path = "/img/seed.jpeg"
    if (progress == 100) {
      path = "img/stage-3-tomato-plant.png"
    } else if (progress > 66) {
      path = "img/stage-2-tomato-plant.png"
    } else if (progress > 33) {
      path = "img/stage-1-tomato-plant.jpg"
    }
    return path
  }

  const plant = updatePlant(getCookie('experience'));

  return (
    <body>
      <NavBar />
        <img src={ plant } className="seed" alt="seed" />
        <div className="percent"><p>Your tomato plant is {getCookie('experience')}% grown. Start playing games to earn more energy points and grow your plant!</p></div>
        <div className="container">
            <div className="energypoints"></div>
            <div><img src="/img/sun.webp" className="sun" alt="sun" /></div>
        </div>
        <div>
          <p className="points">{getCookie('experience')}/100</p>
        </div>
    </body>
  );
};
