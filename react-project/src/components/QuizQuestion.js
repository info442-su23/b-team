import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function QuizQuestion() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <h1>Question 1/5</h1>
      <h2>What percentage of trash is food?</h2>
      <section className="quiz-answers-container">
        <button className='answer-block'>7%</button>
        <button className='answer-block'>22%</button>
        <button className='answer-block'>62%</button>
        <button className='answer-block'>46%</button>
      </section>
      <section className="container-instruction margin">
          <button className="next-button-instruction"><strong><Link to="/correctanswer1">Submit</Link></strong> <span className="arrow-right-instruction">&#10148;</span> </button>
      </section>
    </body>
  )
};