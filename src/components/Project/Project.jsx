import { useState, useEffect } from 'react';
import './Project.css';

export default function Project() {
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8888/projects/api/list");
            const data = await response.json();
            setProject(data);
        }
        fetchData();
    }, []);

    return (
        <section id="projects" className="project-section">
            <h2 className="project-title">
                My <span className="orange">Projects</span>
            </h2>
            <div className="project-cards">
                {project.map((item) => (
                    <div key={item._id} className="project-box">
                        <div className="project-content">
                            <div className="project-name">{item.name}</div>
                            <p className="project-summary">{item.summary}</p>

                            <div className="project-tech">
                                {item.technology.split(',').map((tech, index) => (
                                    <span key={index} className="tech-chip">{tech.trim()}</span>
                                ))}
                            </div>

                            <div className="project-meta">
                                <span className={`status ${item.status === 'Completed' ? 'completed' : 'ongoing'}`}>
                                    {item.status}
                                </span>
                                <span className="duration">{item.timespan}</span>
                            </div>
                        </div>

                        <div className="project-arrow"><span>&#8599;</span></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
