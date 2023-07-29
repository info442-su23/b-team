import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AnswerButton({ buttons }) {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [showNewButton, setShowNewButton] = useState(false);

  // When answer is selected, it becomes outlined & "submit answer" button appears
  const handleClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    setShowNewButton(true);
  };

  const selectedButton = buttons.find((button) => button.id === selectedButtonId);

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
            <Link to="/correctanswer">Submit</Link>
          </strong>{" "}
          <span className="arrow-right-instruction">&#10148;</span>{" "}
        </button>
      )}
    </article>
  );
}


