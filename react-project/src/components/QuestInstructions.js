import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function QuestInstructions() {
    return (
        <body>
            <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <h1 className="quizpage">Quest</h1>
            <img src="/img/quest.png" className="game-image nohov" alt="quest" />
            <h2 className="quizpage">Earn energy points by doing quests! These are real activities that promote less food waste!</h2>
            <div className="container-landing-page">
                <Link to="/questprompt" className="start-button-landing">
                    <strong>Begin Quest</strong>
                    <span className="arrow-right">&#10148;</span>
                </Link>
                </div>
        </body>
    )
};