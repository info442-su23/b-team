import NavBar from "./Nav"
import BackButton from "./GoBackButton"
import { Link } from "react-router-dom"

export default function QuizScore() {
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
          <p>+ 10 Energy Points</p>
        </section>
      </article>
      <section>
        <button className='position'><strong><Link to="/games">Back to Games </Link></strong><span className="arrow-right-instruction">&#10148;</span> </button>
      </section>
    </body>
  )
}