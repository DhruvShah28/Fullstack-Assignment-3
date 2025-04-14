import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <h1>
                    I'm <span className="highlight">Dhruv Shah</span><br />
                    <span className="sub-title">Web Designer</span>
                </h1>
                <div className="hero-buttons">
                    <button className="btn primary-btn">Portfolio ↗</button>
                    <button className="btn secondary-btn">Hire Me</button>
                </div>
            </div>
        </section>
    );
}
