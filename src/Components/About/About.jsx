import "./About.css";
import Icon from "../../assets/about01.png";

const About = () => {
  return (
    <section
      id="about"
      className="about-wrapper container-lg"
      data-analytics-section="about"
    >
      <div className="row g-0 align-items-center justify-content-between flex-column flex-lg-row">
        <div className="about-intro col-8 d-flex justify-content-center flex-column gap-3">
          <div>
            <h2>About me</h2>
            <hr style={{ color: "#ff715a" }} />
          </div>
          <div>
            <p>
              I’m a Full-Stack Developer who enjoys building modern,
              user-focused web applications with JavaScript, React, Node.js,
              and the MERN stack. I’m comfortable working across both frontend
              and backend, with a strong focus on scalability, maintainability,
              and clean architecture.
            </p>
            <p>
              What drives me most is solving problems in a structured way and
              turning ideas into reliable systems that are easy to use, extend,
              and maintain. As I’ve grown as a developer, my mindset has
              expanded from simply building features to thinking more deeply
              about architecture, workflows, and long-term product quality.
            </p>
            <p>
              I also work with AI tools and APIs to improve development
              workflows, speed up repetitive tasks, support debugging, and
              build smarter product experiences when AI adds real value.
            </p>
          </div>
        </div>
        <div className="about-icon col-4">
          <img
            src={Icon}
            alt="Illustration representing Hassan Mourtada's development work"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
