import { useState, useEffect } from 'react';
import './experience.css';

const url = import.meta.env.VITE_API_BASE_URL;


export default function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${url}/experiences/api/list`);
            const data = await response.json();
            setExperience(data);
        }
        fetchData();
    }, []);

    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">
                My <span>Work Experience</span>
            </h2>
            <div className="experience-grid">
                {experience.map((item) => (
                    <div key={item._id} className="experience-card">
                        <div className="date-row">{item.startYear} - {item.endYear}</div>
                        <h3 className="job-title">{item.title}</h3>
                        <p className="company-location">
                            {item.company} – {item.location}
                        </p>
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
