import React, { useState } from 'react';
import BackButton from './GoBackButton';

export default function SeedSelect() {
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return value ? value.pop() : '';
  }

  const submitClick = (selectedImage) => {
    if (getCookie('experience') == 100) {
      setCookie('experience', 0, 365);
    }
    setCookie('plant', `${selectedImage}`, 365);
    setCookie('experience', 0, 365);
  }

  const showStartButton = () => {
    setShowSubmitButton(true)
  }

  return (
    <body className="seed-select-page" >
      <h1 className='seed-select'>Select the type of plant you want to grow. Then click start!</h1>
      <h2 className='seed-select'>Finish plants to unlock higher levels.</h2>
        <a href="#" className="back-arrow"><BackButton /></a>
      <hr className="seed" />
      <h1 className="seed-levels">easy</h1>
      <div className="container-easy">
        <div className="box-opaque" onClick={ showStartButton }>
        <h2 className='seed-label'>Tomato</h2>
        <img
          src="img/seed.jpeg"
          className={`seed-select ${selectedImage === 'tomato' ? 'seed-selected' : ''}`}
          onClick={() => handleImageClick('tomato')}
          alt="seed"
        />
        </div>
        <div className={getCookie('experience') == 100 ? "box-opaque" : "box"} onClick={getCookie('experience') == 100 ? showStartButton : null}>
          <h2 className='seed-label'>Pepper</h2>
          <img
            src="img/seed.jpeg"
            className={`seed-select ${selectedImage === 'pepper' ? 'seed-selected' : ''}`}
            onClick={getCookie('experience') == 100? () => handleImageClick('pepper') : null}
            alt='seed'
        />
        </div>
        <div className="box"><h2 className='seed-label'>Raspberry</h2><img src="img/seed.jpeg" className="seed-select" /></div>
      </div>
      <hr className="seed" />
      <h1 className="seed-levels">medium</h1>
      <div className="container-med">
        <div className="box"><h2 className='seed-label'>Carrots</h2><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><h2 className='seed-label'>Zucchini</h2><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><h2 className='seed-label'>Peas</h2><img src="img/seed.jpeg" className="seed-select" /></div>
      </div>
      <hr className="seed" />
      <h1 className="seed-levels">hard</h1>
      <div className="container-hard">
        <div className="box"><h2 className='seed-label'>Melon</h2><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><h2 className='seed-label'>Potato</h2><img src="img/seed.jpeg" className="seed-select" /></div>
        <div className="box"><h2 className='seed-label'>Pumpkin</h2><img src="img/seed.jpeg" className="seed-select" /></div>
      </div>
      <div className="start-button-seed">
        {showSubmitButton && (
        <button
          className="next-button-seed"
          onClick={() => {
            submitClick(selectedImage);
            window.location.href = '/home';
          }}>Start</button>
        )}
        </div>
      </body>
  );
};