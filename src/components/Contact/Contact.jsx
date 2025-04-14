import './contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-heading">
                Have an <span>Awsome Project Idea?</span> <br />
                <span className="highlight">Let's Discuss</span>
            </h2>

            <form className="contact-form">
                <div className="form-group">
                    <div className="input-icon">
                        <input type="text" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon">
                        <input type="email" placeholder="Enter Email Address" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon">
                        <textarea placeholder="Message" rows="4"></textarea>
                    </div>
                </div>

                <button type="submit" className="send-btn">Send</button>
            </form>
        </section>
    );
}
