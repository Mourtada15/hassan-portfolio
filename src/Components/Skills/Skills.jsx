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
    <section id="skills" className="skills-wrapper">
      <div className="skills-track">
        {[...Array(2)].map((_, i) => (
          <div className="skills-set" key={i}>
            {skills.map(skill => (
              <h4 key={`${i}-${skill}`}>{skill}</h4>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
