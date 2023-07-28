import NavBar from "./Nav"

export default function GameSelection() {
  return (
    <body>
      <NavBar />
      <h1>Select a Game!</h1>
      <div class="row">
        <div class="column">
            <img src="quiz.jpeg" class="quiz" alt="quiz" />
            <h3>Quiz</h3>
        </div>
        <div class="column">
            <img src="quest.png" class="quest" alt="quest" />
            <h3>Quest</h3>
        </div>
        <div class="column">
            <img src="sort.jpeg" class="sort" alt="sort" />
            <h3>Sort</h3>
        </div>
      </div>
      <h2>Earn energy points!</h2>
    </body>
  )
}