import { Link } from "react-router-dom"

export default function QuizScore() {
  return (
    <body>
      <main>
        <article id="quiz-score">
          <p>Congrats! You scored 5/5 questions correctly!</p>
          <section className="energy-points">
            <img className="sun" src="/img/sun.png" alt="sun" />
            <p>+ 10 Energy Points</p>
          </section>
        </article>
        <button className="next-button-instruction"><strong><Link to="/games">Return to Games</Link></strong> <span className="arrow-right-instruction">&#10148;</span> </button>
      </main>
    </body>
  )
}