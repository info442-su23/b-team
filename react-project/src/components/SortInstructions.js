import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function SortInstructions() {
    return (
        <body>
            <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <h1 className="quizpage">Sort</h1>
            <img src="/img/sort.jpeg" className="game-image nohov" alt="sort" />
            <h2 className="quizpage">Sort the waste into the appropriate disposal bin. Earn points for each correct choice!</h2>
            <div className="container-landing-page">
                <Link to="/sortquestion" className="start-button-landing">
                    <strong>Begin Sort</strong>
                    <span className="arrow-right">&#10148;</span>
                </Link>
            </div>
        </body>
    )
};