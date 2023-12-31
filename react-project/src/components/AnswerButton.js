import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AnswerButton({
  currentQuestion,
  showCorrectAnswer,
  setShowCorrectAnswer,
  setIsAnswerCorrect,
  handleNextQuestion,
  currentQuestionIndex
}) {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);

  const buttons = currentQuestion.answers;

  // When answer is selected, it becomes outlined & "submit answer" button appears
  const answerClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    setShowSubmitButton(true);
  };

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return value ? value.pop() : '';
  }

  function updateExperienceDisplay(points) {
    document.getElementsByClassName('points').innerText = points;
  }

  function earnExperience(points) {
    const currentExperience = parseInt(getCookie('experience'), 10) || 0;
    const newExperience = Math.min(currentExperience + points, 100); // Cap at 100 points
    setCookie('experience', newExperience, 30); // Store the points in a cookie for 30 days
    updateExperienceDisplay(newExperience);
  }

  const submitClick = () => {
    if (currentQuestionIndex === 0) {
      // Reset correctAnswersCount cookie at the beginning of a new quiz
      setCookie('correctAnswersCount', '0', 30);
    }

    if (currentQuestionIndex === 4) {
      setEndQuiz(true);

      // Calculate total points earned in the quiz
      let totalQuizPoints = totalPoints;

      // If the last question was correct, add the final points
      const selectedAnswer = currentQuestion.answers.find(
        (answer) => answer.id === selectedButtonId
      );
      if (selectedAnswer?.correct) {
        totalQuizPoints += 20;
      } else {
        totalQuizPoints += 10;
      }

      // Store the total points earned in a cookie
      setCookie('totalPoints', totalQuizPoints, 30);
    }

    const selectedAnswer = currentQuestion.answers.find(
      (answer) => answer.id === selectedButtonId
    );
    const isCorrect = selectedAnswer?.correct ?? false;

    // Calculate points earned
    let pointsEarned = isCorrect ? 20 : 10;
    setTotalPoints(totalPoints + pointsEarned);

    // Update correct answers count and store in a cookie
    const correctAnswersCount =
      parseInt(getCookie('correctAnswersCount'), 10) || 0;
    const newCorrectAnswersCount =
      correctAnswersCount + (isCorrect ? 1 : 0);
    setCookie('correctAnswersCount', newCorrectAnswersCount, 30); // Store the count in a cookie for 30 days

    setShowCorrectAnswer(true);
    setShowSubmitButton(false);
    setShowNextButton(true);

    setIsAnswerCorrect(isCorrect);
  };

  const nextClick = () => {
    setShowNextButton(false);
    if (currentQuestionIndex < 4) {
      handleNextQuestion();
    } else {
      setEndQuiz(true);
    }
  };

  return (
    <article>
      <section className='quiz-answers-container'>
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`answer-block ${selectedButtonId === button.id ? 'selected' : 'unselected'
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
          onClick={submitClick}
        >Submit</button>
      )}
      {showNextButton && currentQuestionIndex < 4 && (
        <section>
          <button className="next-button-instruction heading" onClick={nextClick}>Next Question</button>
        </section>
      )}
      {currentQuestionIndex === 4 && endQuiz && (
        <Link to="/quizscore" state={totalPoints}>
          <button className="next-button-instruction heading" onClick={() => earnExperience(totalPoints)}>Score</button>
        </Link>
      )}
    </article>
  );
}
