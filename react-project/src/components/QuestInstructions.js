import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function QuestInstructions() {
    return (
        <body>
            <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <h1>Quest</h1>
            <h2>Earn energy points by doing quests! These are real activities that promote less food waste!</h2>
            <div className="button">
                <button className="start-button"><strong><Link to="/questprompt">Start</Link></strong> <span class="arrow-right">&#10148;</span> </button>
            </div>
        </body>
    )
};