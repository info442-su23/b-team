export default function NavBar() {
    return (
        <body className="navbar">
            <nav className="navbar">
                <ul>
                    <img src="img/logo.png" className="logo" alt="logo" />
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Garden</a></li>
                    <li><a href="#services">Games</a></li>
                    <li><a href="#contact">DIY</a></li>
                    <div className="container">
                        <div>
                            <p className="points">25/100</p>
                        </div>
                        <div className="energypoints-container">
                            <progress value="25" max="100"></progress>
                        </div>
                        <div><img src="img/sun.webp" className="sun" alt="sun" /></div>
                    </div>
                </ul>
            </nav>
        </body>
    )
}