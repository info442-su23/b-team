import React, { useState } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import AnswerButton from './AnswerButton';

const questions = [
  {
    question: 'What percentage of trash is food?',
    answers: [
    { id: 1, label: '7%', correct: false},
    { id: 2, label: '22%', correct: true},
    { id: 3, label: '62%', correct: false},
    { id: 4, label: '46%', correct: false}
    ],
    correctAnswer: 1,
  },
  // add other questions go here
]



export default function QuizQuestion() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = () => {
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Reached the last question, do something (e.g., show the result)
      console.log('Quiz completed!');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <h1>Question {currentQuestionIndex + 1}/5</h1>
      <h2>{currentQuestion.question}</h2>
      <AnswerButton
        buttons={currentQuestion.answers}
        handleAnswerClick={handleAnswerClick}
      />
    </body>
  )
};