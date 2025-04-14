import './header.css';

export default function Header() {
    return (
        <header className="bg-dark text-white py-3 shadow sticky-top">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                <h2 className="mb-0">
                    <a href="/" className="text-white text-decoration-none fw-bold">Dhruv Shah</a>
                </h2>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#projects" className="nav-link text-white px-2">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" className="nav-link text-white px-2">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link text-white px-2">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}