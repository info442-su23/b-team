import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {

    function getCookie(name) {
        const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return value ? value.pop() : '';
    }

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
      }

    if (getCookie('experience') == 100) {
        setCookie(`grown-${getCookie('plant')}`, true, 365);
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