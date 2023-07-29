import React, { useState } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import AnswerButton from './AnswerButton';

const questions = [
  {
    question: 'What percentage of trash is food?',
    note: 'In fact, food is the single largest component taking up space inside US landfills, making up 22 percent of municipal solid waste.',
    answers: [
    { id: 1, label: '7%', correct: false },
    { id: 2, label: '22%', correct: true },
    { id: 3, label: '62%', correct: false },
    { id: 4, label: '46%', correct: false }
    ],
    correctAnswer: 1,
  },
  {
    question: 'Test Question 2',
    note: 'Fun fact',
    answers: [
    { id: 1, label: '1', correct: true },
    { id: 2, label: '2', correct: false },
    { id: 3, label: '3', correct: false },
    { id: 4, label: '4', correct: false }
    ],
    correctAnswer: 0,
  },
  // add other questions go here
]


export default function QuizQuestion() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < 2) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowCorrectAnswer(false);
      console.log(currentQuestionIndex)
    } else {
      console.log('else statement')
      setEndQuiz(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <article className="correct-answer">
        <section className={ showCorrectAnswer ? ' ' : 'hidden'}>
            <h1>Correct!</h1>{/* <h1>{selectedAnswer.correct ? 'Correct!' : 'Incorrect'}</h1> */}
            <div className='text-container'>
              <p>{ currentQuestion.note }</p>
            </div>
        </section>
        <section>
          <h1>Question { currentQuestionIndex + 1 }/5</h1>
          <h2>{ currentQuestion.question }</h2>
          <AnswerButton
            currentQuestion={ currentQuestion }
            showCorrectAnswer={ showCorrectAnswer }
            setShowCorrectAnswer={ setShowCorrectAnswer }
            handleNextQuestion={ handleNextQuestion }
            currentQuestionIndex={ currentQuestionIndex }
            endQuiz={ endQuiz }
          />
        </section>
      </article>
    </body>
  )
};