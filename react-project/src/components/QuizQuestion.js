import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import AnswerButton from './AnswerButton';

export default function QuizQuestion() {
  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <h1>Question 1/5</h1>
      <h2>What percentage of trash is food?</h2>
      <AnswerButton />
    </body>
  )
};