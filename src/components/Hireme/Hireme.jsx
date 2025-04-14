import './HireMe.css';

export default function HireMe() {
    return (
        <section id="hire" className="hireme-section">
            <div className="hireme-content">
                <div className="left-box">
                    <img src="/src/assets/dhruv-new.jpg" alt="Personal Image" />
                </div>
                <div className="right-box">
                    <h2 className="hireme-heading">
                        Why <span>Hire Me</span>
                    </h2>
                    <p className="hireme-text">
                        I am an experienced website developer with a demonstrated history of working in the information technology and services industry.
                        I am highly skilled in HTML, CSS, JavaScript, Python, and Microsoft Office. With a Bachelor's degree focused in Computer Programming,
                        I am a strong professional who is eager to contribute my skills to a dynamic company and expand my learning.
                    </p>
                    <a href="/resume.pdf" download className="download-btn">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
