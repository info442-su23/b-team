export default function QuizScore() {
  return (
    <body>
      <main>
        <article id="quiz-score">
          <p>Congrats! You scored 5/5 questions correctly!</p>
          <section>
            <img className="sun" src="/react-project/public/img/sun.png" alt="sun" />
            <p>+ 10 Energy Points</p>
          </section>
        </article>
        <a><button class="arrow-button">Return to Games <img id="arrow" src="/react-project/public/img/button-arrow.png" alt="arrow" /></button></a>
      </main>
    </body>
  )
}