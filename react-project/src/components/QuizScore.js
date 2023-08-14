import NavBar from "./Nav"
import BackButton from "./GoBackButton"
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function QuizScore() {
  const location = useLocation();
  const totalPoints = location.state;

  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <article id="quiz-score">
        <section className="heading">
          <h1>Sort</h1>
          <p>Congrats! You correctly answered 5/5 questions correctly!</p>
        </section>
        <section className="energy-points">
          <img className="energy" src="/img/sun.png" alt="sun" />
          <p>+ {totalPoints} Energy Points</p>
        </section>
      </article>
      <section>
      <Link to="/games" className="start-button-landing">
                    <strong>Back to Games</strong>
                    <span className="arrow-right">&#10148;</span>
                </Link>      </section>
    </body>
  )
}