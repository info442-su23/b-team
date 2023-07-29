import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AnswerButton({
  currentQuestion,
  showCorrectAnswer,
  setShowCorrectAnswer,
  handleNextQuestion,
  currentQuestionIndex,
  endQuiz
}) {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const buttons = currentQuestion.answers

  // When answer is selected, it becomes outlined & "submit answer" button appears
  const answerClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    setShowSubmitButton(true);
  };

  const submitClick = () => {
    setShowCorrectAnswer(true);
    setShowSubmitButton(false);
    setShowNextButton(true);
  }

  const nextClick = () => {
    setShowNextButton(false);
    handleNextQuestion();
  }

  return (
    <article>
      <section className='quiz-answers-container'>
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`answer-block ${
              selectedButtonId === button.id ? 'selected' : 'unselected'
            }`}
            onClick={() => answerClick(button.id)}
            disabled={showNextButton}
          >
            {button.label}
          </button>
        ))}
      </section>
      {showSubmitButton && (
        <button
        className="next-button-instruction heading"
        onClick={ submitClick }
        >Submit</button>
      )}
      {showNextButton && (
        <>
        {endQuiz ? (
          <Link to="/quizscore">
            <button className="next-button-instruction heading">Score</button>
          </Link>
        ) : (
          <button className="next-button-instruction heading" onClick={nextClick}>
            Next Question
          </button>
        )}
      </>
      )}
    </article>
  );
}

{/* <span className="arrow-right-instruction">&#10148;</span>{" "} */}



