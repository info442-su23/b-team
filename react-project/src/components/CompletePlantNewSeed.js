import React from 'react';

export default function CompletePlantNewSeed() {
  return (
    <body className="seed-select-page">
      <main>
        <article>
          <section id="select-new-seed">
            <img id="garden" src="/img/stage-3-tomato-plant.png" alt="stage-3-tomato-plant" />
            <p>Your tomato plant is 100% grown. Start growing your next plant by selecting a new seed!</p>
          </section>
          <section id="select-new-seed-container">
            <div className="container-new-seed">
              <div className="energypoints-container">
                <progress value={100} max={100}></progress>
              </div>
              <div>
                  <p className="points">100/100</p>
              </div>
            </div>
              <img id="navbar-sun" src="/img/sun.png" className="sun" alt="sun" />
          </section>
        </article>
        <a><button className="arrow-button">Seeds <img id="arrow" src="/img/arrow.png" alt="arrow" /></button></a>
      </main>
    </body>
  );
};
