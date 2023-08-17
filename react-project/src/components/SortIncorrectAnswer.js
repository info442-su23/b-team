import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import SortAnswerButton from './SortAnswerButton';

export default function SortIncorrectAnswer() {

  // const location = useLocation();
  // const { currentQuestion, selectedButtonId } = location.state;
  


  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      {/* <h1>Question {1}/5</h1> */}
      <article className='correct-answer'>
        <section>
          {/* <h1>{selectedAnswer.correct ? 'Correct!' : 'Incorrect'}</h1> */}
          <div className='text-container'>
            <p>Nice try! Cucumbers can actually be composted! They contribute valuable nutrients to the compost pile.</p>
          </div>
        </section>
        <section>
          {/* <h2>What percentage of trash is food?</h2> */}
          <section className='sortingQuestion'>
                <h2>What bin would you use to dispose of an old cucumber?</h2>
                <img src="img/trash_bins.webp" className='sortingPic' />
                {/* <SortAnswerButton /> */}
            </section>
        </section>
      </article>
      <section className="container-instruction margin">
          <button className="next-button-instruction"><strong><Link to="/sortscore">Next</Link></strong> <span className="arrow-right-instruction">&#10148;</span> </button>
      </section>

    </body>
  )
};