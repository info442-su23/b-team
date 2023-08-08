import React, { useState } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from "react-router-dom";
import Checkbox from './Checkbox';

export default function QuestPrompt() {
    const [totalPoints, setTotalPoints] = useState(0);

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
      }

      function getCookie(name) {
        const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return value ? value.pop() : '';
      }

      function updateExperienceDisplay(totalPoints) {
        document.getElementsByClassName('points').innerText = totalPoints;
      }

      function earnExperience(points) {
        const currentPoints = parseInt(getCookie('experience'), 10) || 0;
        const totalPoints = Math.min(currentPoints + points, 100); // Cap at 100 points
        setCookie('experience', totalPoints, 30); // Store the points in a cookie for 30 days
        updateExperienceDisplay(totalPoints);
      }

      function handleCheckboxChange(points, isChecked) {
        if (isChecked) {
            setTotalPoints(totalPoints + points);
            console.log(totalPoints)
        } else {
            setTotalPoints(totalPoints - points);
        }
    }

    return (
        <body className="questprompt">
            <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <h1>Quest</h1>
            <div className="checkbox-container">
                <h2>
                <   Checkbox onChange={(isChecked) => handleCheckboxChange(20, isChecked)} />
                    Quest 1: Pick up 5 pieces of trash outside
                </h2>
                <h2>
                    <Checkbox onChange={(isChecked) => handleCheckboxChange(20, isChecked)} />
                    Quest 2: Start a compost bin
                </h2>
                <h2>
                    <Checkbox onChange={(isChecked) => handleCheckboxChange(20, isChecked)} />
                    Quest 3: Organize your fridge by <br></br> moving the closest items to the front
                </h2>
            </div>
            <div>
                <Link to="/questscore" state={ totalPoints }>
                    <button
                        className="next-button-seed"
                        onClick={ earnExperience(totalPoints) }><strong>Submit </strong>
                        <span className="arrow-right-instruction">&#10148;</span>{" "}
                    </button>
                </Link>
            </div>
        </body>
    )
};

