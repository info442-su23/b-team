export default function InstructionPage() {
    return (
        <body>
            <a href="#" className="back-arrow"><span className="arrow-left-instruction">&#8592;</span></a>
            <div className="container-instruction">
                <header>
                    <h1>How to Play</h1>
                    <ul className="instruction">
                        <li className="instruction">1. Select the seed you want to grow.</li>
                        <li className="instruction">2. Complete quizzes, challenges and games to earn energy towards growing your plant.</li>
                        <li className="instruction">3. Once you grow your plant fully, unlock a new DIY!</li>
                        <li className="instruction">4. Add to your garden by repeating this process with new seeds.</li>
                        <li className="instruction">5. Have fun and learn how to reduce food waste!</li>
                    </ul>
                </header>
            </div>
            <div className="button-container-instruction">
                <button className="skip-button-instruction"><strong>Skip</strong></button>
                <div className="container-instruction">
                    <button className="next-button-instruction"><strong>Next</strong> <span className="arrow-right-instruction">&#10148;</span> </button>
                </div>
            </div>
        </body>
    )
}