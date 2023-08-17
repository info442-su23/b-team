import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SortAnswerButton() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [showNewButton, setShowNewButton] = useState(false);

  // When answer is selected, it becomes outlined & "submit answer" button appears
  const handleClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    setShowNewButton(true);
  };

  // 4 possible answers
  const buttons = [
    { id: 1, label: 'Paper', correct: false},
    { id: 2, label: 'Glass, Cans, Plastic bottles', correct: false},
    { id: 3, label: 'Compost', correct: true},
    { id: 4, label: 'Landfill', correct: false}
  ];

  const selectedButton = buttons.find((button) => button.id === selectedButtonId);
  const toValue = selectedButton?.correct ? "/sortcorrectanswer" : "/sortincorrectanswer";

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
        <button className="next-button-instruction-sorting">
          <strong>
            <Link to={toValue}>Submit</Link>
          </strong>{" "}
          <span className="arrow-right-instruction">&#10148;</span>{" "}
        </button>
      )}
    </article>
  );
}


