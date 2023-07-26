export default function SeedSelect() {
  return (
    <body className="seed-select-page">
        <div className="back-container">
            <a href="#" className="back-arrow"><span className="arrow-left">&#8592;</span></a>
        </div>
        <hr />
        <h1 className="seed-levels">easy</h1>
        <div className="container-easy">
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
        </div>
        <hr />
        <h1 className="seed-levels">medium</h1>
        <div className="container-med">
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
        </div>
        <hr />
        <h1 className="seed-levels">hard</h1>
        <div className="container-hard">
            <div className="box"><img src="img/seed.jpeg" className="seed-select" /></div>
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
            <div className="box"><img src="/img/seed.jpeg" className="seed-select" /></div>
        </div>
        <div className="start-button">
            <button className="next-button">Start</button>
        </div>
    </body>
  );
};
