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
              I'm a React and JavaScript developer with professional experience
              building and maintaining responsive web applications and modern
              user interfaces.
            </p>
            <p>
              Before starting my professional web development career, I
              completed an intensive 6-month Full-Stack Web Development
              bootcamp, where I gained practical experience with the MERN stack
              (MongoDB, Express.js, React, and Node.js). Since then, I've
              continued expanding my skills by independently designing and
              building full-stack MERN projects, implementing REST APIs,
              authentication, database integration, and responsive user
              interfaces.
            </p>
            <p>
              I enjoy learning continuously, writing clean and maintainable
              code, solving real-world problems, and collaborating with teams to
              deliver high-quality software.
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
