import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from "react-router-dom";
import Checkbox from './Checkbox';

export default function QuestPrompt() {
    return (
        <body className="questprompt">
            <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <h1>Quest</h1>
            <div className="checkbox-container">
                <h2><Checkbox />Quest 1: Pick up 5 pieces of trash outside</h2>
                <h2><Checkbox />Quest 2: Start a compost bin</h2>
                <h2><Checkbox />Quest 3: Organize your fridge
                    by <br></br> moving the closest items toUTCString the front</h2>
            </div>
            <div className="start-button-seed">
                <button className="next-button-seed"><strong><Link to="/home">Submit</Link>
                </strong>{" "}
                    <span className="arrow-right-instruction">&#10148;</span>{" "}
                </button>
            </div>
        </body>
    )
};