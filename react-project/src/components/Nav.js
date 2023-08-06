import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {

    function getCookie(name) {
        const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return value ? value.pop() : '';
    }

    return (
        <body className="navbar">
            <nav className="navbar">
                <ul>
                    <img src="img/logo.png" className="logo" alt="logo" />
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/garden">Garden</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/diy">DIY</Link></li>
                    <div className="container">
                        <div>
                            <p className="points">{getCookie('experience')}/100</p>
                        </div>
                        <div className="energypoints-container">
                            <progress value={getCookie('experience')} max="100"></progress>
                        </div>
                        <div><img src="img/sun.webp" className="sun" alt="sun" /></div>
                    </div>
                </ul>
            </nav>
        </body>
    )
}