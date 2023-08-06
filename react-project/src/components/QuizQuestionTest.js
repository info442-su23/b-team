import React, { useState, useEffect } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { getDatabase, ref, get } from "firebase/database";
import { Link } from "react-router-dom"

const QuizQuestionTest = () => {
    const [quizData, setQuizData] = useState([]);
    const [userResponses, setUserResponses] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

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

    const handleResponseChange = (questionId, selectedOption) => {
        setUserResponses((prevResponses) => ({
            ...prevResponses,
            [questionId]: selectedOption,
        }));

        // Move to the next question when the user selects an answer
        if (currentQuestionIndex < 4) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            // If all 5 questions are answered, calculate the score and end the quiz
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

        // Set the current question index to -1 to indicate the end of the quiz
        setCurrentQuestionIndex(-1);
    };

    if (quizData.length === 0 || currentQuestionIndex === -1) {
        // Show loading or final score after completing all questions
        return (
            <div>
                <article id="quiz-score">
                    <section className="heading">
                        <h1>Sort</h1>
                        {quizData.length === 0 ? <p>Loading...</p> : <p>Quiz Completed! Your Score: {score} out of 5</p>}
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
        <div>
            <h3>{currentQuestion.Question}</h3>
            <div>
                <input
                    type="radio"
                    name={`question_${currentQuestionIndex}`}
                    value="Correct Answer"
                    checked={userResponses[currentQuestion.Question] === currentQuestion['Correct Answer']}
                    onChange={() => handleResponseChange(currentQuestion.Question, currentQuestion['Correct Answer'])}
                />
                <label>{currentQuestion['Correct Answer']}</label>
            </div>
            <div>
                <input
                    type="radio"
                    name={`question_${currentQuestionIndex}`}
                    value="Incorrect 1"
                    checked={userResponses[currentQuestion.Question] === currentQuestion['Incorrect 1']}
                    onChange={() => handleResponseChange(currentQuestion.Question, currentQuestion['Incorrect 1'])}
                />
                <label>{currentQuestion['Incorrect 1']}</label>
            </div>
            <div>
                <input
                    type="radio"
                    name={`question_${currentQuestionIndex}`}
                    value="Incorrect 2"
                    checked={userResponses[currentQuestion.Question] === currentQuestion['Incorrect 2']}
                    onChange={() => handleResponseChange(currentQuestion.Question, currentQuestion['Incorrect 2'])}
                />
                <label>{currentQuestion['Incorrect 2']}</label>
            </div>
            <div>
                <input
                    type="radio"
                    name={`question_${currentQuestionIndex}`}
                    value="Incorrect 3"
                    checked={userResponses[currentQuestion.Question] === currentQuestion['Incorrect 3']}
                    onChange={() => handleResponseChange(currentQuestion.Question, currentQuestion['Incorrect 3'])}
                />
                <label>{currentQuestion['Incorrect 3']}</label>
            </div>
            <button onClick={handleSubmitQuiz}>Submit</button>
        </div>
    );
};

export default QuizQuestionTest;