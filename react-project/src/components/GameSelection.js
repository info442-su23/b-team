import NavBar from "./Nav";
import { Link } from "react-router-dom";

export default function GameSelection() {
  return (
    <body>
      <NavBar />
      <h1>Select a Game!</h1>
      <article id="game-selection">
        <div class="column">
          <Link to="/quizinstruction">
            <img src="/img/quiz.jpeg" className="game-image quiz" alt="quiz" />
          </Link>
          <h3>Quiz</h3>
        </div>
        <div class="column">
          <Link to="/questinstruction">
            <img src="/img/quest.png" className="game-image quest" alt="quest" />
          </Link>
          <h3>Quest</h3>
        </div>
        <div class="column">
          <Link to="/sortinstructions">
            <img src="/img/sort.jpeg" className="game-image sort" alt="sort" />
          </Link>
          <h3>Sort</h3>
        </div>
      </article>
      <h2>Earn energy points!</h2>
    </body>
  );
}
