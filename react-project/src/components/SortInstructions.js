import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function SortInstructions() {
    return (
        <body>
            <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <h1>Sort</h1>
            <h2>Sort the waste into the appropriate disposal bin. Earn points for each correct choice!</h2>
            <div className="start-button-seed">
                <button className="start-button-seed"><strong><Link to="/SortQuestion">Start</Link></strong> <span class="arrow-right">&#10148;</span> </button>
            </div>
        </body>
    )
};