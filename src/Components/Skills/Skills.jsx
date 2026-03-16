import "./Skills.css";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "Vue.js",
  "Node.js", "Express.js", "RESTful APIs",
  "MongoDB", "MySQL", "Git", "GitHub",
  "TypeScript", "JWT Authentication",
  "Mongoose", "Postman",
  "Responsive Web Design",
  "Environment Variables", "Deployment"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-wrapper"
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className="visually-hidden">
        Skills
      </h2>
      <div className="skills-track">
        {[...Array(2)].map((_, i) => (
          <ul className="skills-set" key={i} aria-hidden={i === 1}>
            {skills.map(skill => (
              <li className="skills-item" key={`${i}-${skill}`}>
                {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Skills;
