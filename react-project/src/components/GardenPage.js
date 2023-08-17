import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';

export default function GardenPage() {

    function getCookie(name) {
        const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return value ? value.pop() : '';
      }

    return (
        <body>
             <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <div className="container-demo">
                <header className="navigation-bar-demo">
                    <h1>Garden</h1>
                    <h2>{getCookie('grown-tomato') ? 'Your garden is looking nice!': 'Your Garden is empty :-('} </h2>
                    <h2>{getCookie('grown-tomato') ? null : 'Plants will appear once fully grown!'} </h2>
                    <h3>{getCookie('grown-tomato') ? null : 'Earn energy points in the Games tab to grow your plants.'} </h3>
                </header>
            </div>
            <div>
                <img src="img/empty-garden.png" className="garden" alt="Empty garden image" />
                {getCookie('grown-tomato') ? (
                <div class="overlay">
                    <img src='img/stage-3-tomato-plant.jpg' alt='tomato-plant'/>
                </div>
                ) : null}
            </div>
        </body>
    );
};