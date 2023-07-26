export default function HomePage() {
  return (
    <body>
        <img src="/img/seed.jpeg" className="seed" alt="seed" />
        <div className="percent"><p>Your tomato plant is 0% grown. Start playing games to earn more energy points and grow your plant!</p></div>
        <div className="container">
            <div className="energypoints"></div>
            <div><img src="/img/sun.webp" className="sun" alt="sun" /></div>
        </div>
        <div>
          <p className="points">0/100</p>
        </div>
    </body>
  );
};
