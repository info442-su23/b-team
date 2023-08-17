import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link, useLocation } from 'react-router-dom';

export default function QuizScore() {
  const location = useLocation();

  function getCookie(name) {
    const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return value ? value.pop() : '';
  }

  const totalPoints = parseInt(getCookie('totalPoints'), 10) || 0; // Use optional chaining to handle undefined
  const correctAnswersCount = parseInt(getCookie('correctAnswersCount'), 10) || 0;

  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow">
        <BackButton />
      </a>
      <article id="quiz-score">
        <section className="heading">
          <h1>Sort</h1>
          <p>Congrats! You correctly answered {correctAnswersCount}/5 questions correctly!</p>
        </section>
        <section className="energy-points">
          <img className="energy" src="/img/sun.png" alt="sun" />
          <p>+ {totalPoints} Energy Points</p>
        </section>
      </article>
      <section>
        <Link to="/games" className="start-button-landing">
          <strong>Back to Games</strong>
          <span className="arrow-right">&#10148;</span>
        </Link>
      </section>
    </body>
  );
}
