import NavBar from "./Nav"
import { Link } from "react-router-dom"

export default function GameSelection() {
  return (
    <body>
      <NavBar />
      <h1>Select a Game!</h1>
      <article id="game-selection">
        <div class="column">
            <Link to="/quizinstruction"><img src="/img/quiz.jpeg" class="quiz" alt="quiz" /></Link>
            <h3>Quiz</h3>
        </div>
        <div class="column">
            <Link to="/questinstruction"><img src="/img/quest.png" class="quest" alt="quest" /></Link>
            <h3>Quest</h3>
        </div>
        <div class="column">
            <Link to="/sortinstruction"><img src="/img/sort.jpeg" class="sort" alt="sort" /></Link>
            <h3>Sort</h3>
        </div>
      </article>
      <h2>Earn energy points!</h2>
    </body>
  )
}