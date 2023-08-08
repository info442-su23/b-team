import React, { useState, useEffect } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import AnswerButton from './AnswerButton';
import { getDatabase, ref, get } from "firebase/database";

export default function QuizQuestion() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizData, setQuizData] = useState([]);

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

const questions = quizData.map(item => {
  const question = item["Question"];
  const note = item["Fact"];
  const correctAnswerLabel = item["Correct Answer"];
  const incorrectAnswers = [
    item["Incorrect 1"],
    item["Incorrect 2"],
    item["Incorrect 3"]
  ];

  const answers = [
    { id: 1, label: incorrectAnswers[0], correct: false },
    { id: 2, label: incorrectAnswers[1], correct: false },
    { id: 3, label: correctAnswerLabel, correct: true },
    { id: 4, label: incorrectAnswers[2], correct: false }
  ];

  const correctAnswerIndex = answers.findIndex(answer => answer.correct);

  return {
    question,
    note,
    answers,
    correctAnswer: correctAnswerIndex
  };
});

  // Cycles through each question until reaching the end of the list
  const handleNextQuestion = () => {
    if (currentQuestionIndex < 5) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowCorrectAnswer(false);
      setIsAnswerCorrect(false);
      console.log('hello', currentQuestionIndex)
  }};

  if (questions.length === 0) {
    // Data hasn't been fetched yet, or no data is available
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <article className="correct-answer">
      {currentQuestion ? (  // Check if currentQuestion is defined before rendering
        <section className={showCorrectAnswer ? ' ' : 'hidden'}>
          <h1>{isAnswerCorrect ? 'Correct!' : 'Incorrect'}</h1>
          <div className='text-container'>
            <p>{currentQuestion.note}</p>
          </div>
        </section>
      ) : null}
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
          />
        </section>
      </article>
    </body>
  )
};