import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function QuizInstructions() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <h1 className="quizpage">Quiz</h1>
      <h2>Choose the correct answer to earn energy points. Learn about food waste along the way.</h2>
      <div className="button">
        <button className="start-button"><strong><Link to="/quizquestion">Start</Link></strong> <span class="arrow-right">&#10148;</span> </button>
      </div>
    </body>
  )
};