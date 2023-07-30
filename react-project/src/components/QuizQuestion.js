import React, { useState, useEffect } from 'react';
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
  }
  // add other questions go here
]


export default function QuizQuestion() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);

  useEffect(() => {
    console.log('Current question index:', currentQuestionIndex);
  }, [currentQuestionIndex]);

  // Cycles through each question until reaching the end of the list
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowCorrectAnswer(false);
      setIsAnswerCorrect(false);
      console.log(currentQuestionIndex)
    } else {
      console.log('im here')
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
            <h1>{isAnswerCorrect ? 'Correct!' : 'Incorrect'}</h1>
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
            setIsAnswerCorrect={ setIsAnswerCorrect }
            handleNextQuestion={ handleNextQuestion }
            currentQuestionIndex={ currentQuestionIndex }
            endQuiz={ endQuiz }
          />
        </section>
      </article>
    </body>
  )
};