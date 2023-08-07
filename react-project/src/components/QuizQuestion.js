import React, { useState, useEffect } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { getDatabase, ref, get } from "firebase/database";
import { Link } from "react-router-dom";

export default function QuizQuestion() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [userResponses, setUserResponses] = useState({});

  useEffect(() => {
    // Fetch quiz data from Firebase Realtime Database
    const fetchQuizData = async () => {
      try {
        const db = getDatabase();
        const quizRef = ref(db, '/');
        const snapshot = await get(quizRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const quizData = Object.values(data);
          setQuizData(quizData);
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  const handleResponseChange = (selectedOption) => {
    const currentQuestion = quizData[currentQuestionIndex];
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestion.Question]: selectedOption,
    }));
  };

  const handleSubmitQuestion = () => {
    setShowCorrectAnswer(true);
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowCorrectAnswer(false);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    // Calculate the score based on user responses and correct answers
    let userScore = 0;
    quizData.forEach((question) => {
      if (userResponses[question.Question] === question['Correct Answer']) {
        userScore++;
      }
    });
    setScore(userScore);
    setCurrentQuestionIndex(-1);
  };

  if (quizData.length === 0) {
    // Show loading
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (currentQuestionIndex === -1) {
    // Show final score after completing all questions
    return (
      <div>
        <article id="quiz-score">
          <section className="heading">
            <h1>Sort</h1>
            <p>Quiz Completed! Your Score: {score} out of 5</p>
          </section>
          <section className="energy-points">
            <img className="energy" src="/img/sun.png" alt="sun" />
            <p>+ 10 Energy Points</p>
          </section>
        </article>
        <section>
          <button className='position'><strong><Link to="/games">Back to Games </Link></strong><span className="arrow-right-instruction">&#10148;</span> </button>
        </section>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <article className="correct-answer">
        <section className={showCorrectAnswer ? ' ' : 'hidden'}>
          <h1>{userResponses[currentQuestion.Question] === currentQuestion['Correct Answer'] ? 'Correct!' : 'Incorrect'}</h1>
          <div className='text-container'>
            <p>{currentQuestion.Fact}</p>
          </div>
        </section>
        <section>
          <h1>Question {currentQuestionIndex + 1}/5</h1>
          <h2>{currentQuestion.Question}</h2>
          <div>
            <input
              type="radio"
              name={`question_${currentQuestionIndex}`}
              value={currentQuestion['Correct Answer']}
              checked={userResponses[currentQuestion.Question] === currentQuestion['Correct Answer']}
              onChange={() => handleResponseChange(currentQuestion['Correct Answer'])}
            />
            <label>{currentQuestion['Correct Answer']}</label>
          </div>
          <div>
            <input
              type="radio"
              name={`question_${currentQuestionIndex}`}
              value={currentQuestion['Incorrect 1']}
              checked={userResponses[currentQuestion.Question] === currentQuestion['Incorrect 1']}
              onChange={() => handleResponseChange(currentQuestion['Incorrect 1'])}
            />
            <label>{currentQuestion['Incorrect 1']}</label>
          </div>
          <div>
            <input
              type="radio"
              name={`question_${currentQuestionIndex}`}
              value={currentQuestion['Incorrect 2']}
              checked={userResponses[currentQuestion.Question] === currentQuestion['Incorrect 2']}
              onChange={() => handleResponseChange(currentQuestion['Incorrect 2'])}
            />
            <label>{currentQuestion['Incorrect 2']}</label>
          </div>
          <div>
            <input
              type="radio"
              name={`question_${currentQuestionIndex}`}
              value={currentQuestion['Incorrect 3']}
              checked={userResponses[currentQuestion.Question] === currentQuestion['Incorrect 3']}
              onChange={() => handleResponseChange(currentQuestion['Incorrect 3'])}
            />
            <label>{currentQuestion['Incorrect 3']}</label>
          </div>
          <button onClick={handleSubmitQuestion}>Submit Question</button>
        </section>
      </article>
    </body>
  );
}
