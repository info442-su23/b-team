import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';

export default function QuizAnswer() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <h1>Question 1/5</h1>
      <article className='correct-answer'>
        <section>
          <h1>Correct!</h1>
          <div className='text-container'>
            <p>In fact, food is the single largest component taking up space inside US landfills, making up 22 percent of municipal solid waste.</p>
          </div>
        </section>
        <section>
          <h2>What percentage of trash is food?</h2>
          <section className="quiz-answers-container">
            <button className='answer-block'>7%</button>
            <button className='answer-block'>22%</button>
            <button className='answer-block'>62%</button>
            <button className='answer-block'>46%</button>
          </section>
        </section>
      </article>
      <section className="container-instruction margin">
          <button className="next-button-instruction"><strong><Link to="/quizscore">Next</Link></strong> <span className="arrow-right-instruction">&#10148;</span> </button>
      </section>

    </body>
  )
};