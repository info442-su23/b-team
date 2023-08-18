import NavBar from "./Nav"
import BackButton from "./GoBackButton"
import { Link } from "react-router-dom"

export default function SortScore() {

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return value ? value.pop() : '';
  }

  function updateExperienceDisplay(points) {
    document.getElementsByClassName('points').innerText = points;
  }

  function earnExperience(points) {
    const currentExperience = parseInt(getCookie('experience'), 10) || 0;
    const newExperience = Math.min(currentExperience + points, 100); // Cap at 100 points
    setCookie('experience', newExperience, 30); // Store the points in a cookie for 30 days
    updateExperienceDisplay(newExperience);
  }

  earnExperience(parseInt(getCookie('totalPoints'), 10) || 0);

  return (
    <body>
      <NavBar />
      <a href="#" className="back-arrow"><BackButton /></a>
      <article id="quiz-score">
        <section className="heading">
          <h1>Sort</h1>
          <p>Congrats! You completed sorting the waste items.</p>
        </section>
        <section className="energy-points">
          <img className="energy" src="/img/sun.png" alt="sun" />
          <p>+ {getCookie('totalPoints')} Energy Points</p>
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