import React from 'react';

export default function LandingPage() {
    return (
        <body className="landing-page">
            <img src="img/logo.png" className="landing-page" alt="Plant logo for biodbuddies" />
            <header className="landing-page">
                <h1 className="landing-page">BioBuddies</h1>
                <h2 className="landing-page">Grow your own garden and learn how to reduce food waste!</h2>
            </header>
            <div className="container-landing-page">
                <button className="start-button-landing"><strong>Start Playing</strong> <span className="arrow-right">&#10148;</span> </button>
            </div>
        </body>
    )
}