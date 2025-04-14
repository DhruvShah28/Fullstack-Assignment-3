import './footer.css';

export default function Footer() {
    return (
        <footer className="bg-light border-top py-4 mt-5">
            <div className="container text-center">
                <p className="mb-1">&copy; {new Date().getFullYear()} <strong>Dhruv Shah</strong> | Portfolio</p>
                <p className="text-muted small">Built with logic using React & Bootstrap</p>
            </div>
        </footer>
    );
}
