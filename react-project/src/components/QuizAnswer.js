import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';

export default function QuizAnswer() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <h1>Question 1/5</h1>
      <h2>What percentage of trash is food?</h2>
      <section className="quiz-answers-container">
        <button className="answer-block">7</button>
        <button className="answer-block">22</button>
        <button className="answer-block">62</button>
        <button className="answer-block">46</button>
      </section>

    </body>
  )
};