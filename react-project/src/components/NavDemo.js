import React from 'react';
import { Link } from "react-router-dom";
import BackButton from './GoBackButton';

export default function NavDemo() {
    return (
        <body>
            <a href="#" className="back-arrow"><BackButton /></a>

            <div className="container-demo">
                <header className="navigation-bar-demo">
                    <h1>Navigational Bar Demo</h1>
                </header>
            </div>

            <div className="card-containers-demo">
                <div className="card">
                    <p>The back button will take you back to the page you were at previously.</p>
                </div>
                <div className="card">
                    <p>Click the Logo at any time if you want to return home!</p>
                </div>
                <div className="card">
                    <p>The garden page keeps track of all your completed plants!</p>
                </div>
                <div className="card">
                    <p>The game page allows you to earn energy points. Click to start growing!</p>
                </div>
                <div className="card">
                    <p>The DIY page holds all unlocked do it yourself projects!</p>
                </div>
                <div className="card">
                    <p>You will find the status of your plants growth at the top right of each screen.
                        Click the sun at any time to see the status of your plant.
                        Once the sun is yellow, your plant has fully grown!</p>

                </div>
            </div>

            <div className="button-container-instruction">
                <button onClick={() => window.location.href = '/home'} className="skip-button-instruction">
                    <strong>Skip</strong>
                </button>
                <div className="container-instruction">
                    <button onClick={() => window.location.href = '/seedselect'} className="next-button-instruction">
                        <strong>Next</strong>
                        <span className="arrow-right-instruction">&#10148;</span>
                    </button>
                </div>
                </div>
        </body>
    )
}