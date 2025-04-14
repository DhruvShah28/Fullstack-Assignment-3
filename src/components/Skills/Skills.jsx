import './skills.css';

export default function Skills() {
    return (
        <div className="skills-banner">
            <div className="skills-inner">
                <div className="scroll-track">
                    {[...Array(2)].map((_, i) => (
                        <div className="scroll-content" key={i}>
                            <span>HTML</span> ✦ <span>CSS</span> ✦ <span>C#</span> ✦ <span>MongoDB</span> ✦ <span>React</span> ✦ 
                            <span>JavaScript</span> ✦ <span>Python</span> ✦ <span>PHP</span> ✦ <span>Node</span> ✦
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
