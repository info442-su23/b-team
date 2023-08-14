import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function GardenPage() {
    return (
        <body>
             <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <div className="container-demo">
                <header className="navigation-bar-demo">
                    <h1>Garden</h1>
                    <h2>Your Garden is empty :-( </h2>
                    <h2>Plants will appear once fully grown!</h2>
                    <h3>Earn energy points to grow your plants.</h3>
                </header>
            </div>
            <div>
                <img src="img/empty-garden.png" className="garden" alt="Empty garden image" />
            </div>
        </body>
    );
};