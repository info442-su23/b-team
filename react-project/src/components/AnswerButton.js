import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AnswerButton() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [showNewButton, setShowNewButton] = useState(false);

  // When answer is selected, it becomes outlined & "submit answer" button appears
  const handleClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    setShowNewButton(true);
  };

  // 4 possible answers
  const buttons = [
    { id: 1, label: '7%', correct: false},
    { id: 2, label: '22%', correct: true},
    { id: 3, label: '62%', correct: false},
    { id: 4, label: '46%', correct: false}
  ];

  const selectedButton = buttons.find((button) => button.id === selectedButtonId);
  const toValue = selectedButton?.correct ? "/correctanswer" : "/incorrectanswer";

  return (
    <article>
      <section className='quiz-answers-container'>
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`answer-block ${
              selectedButtonId === button.id ? 'selected' : 'unselected'
            }`}
            onClick={() => handleClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </section>
      {showNewButton && (
        <button className="next-button-instruction heading">
          <strong>
            <Link to={toValue}>Submit</Link>
          </strong>{" "}
          <span className="arrow-right-instruction">&#10148;</span>{" "}
        </button>
      )}
    </article>
  );
}


