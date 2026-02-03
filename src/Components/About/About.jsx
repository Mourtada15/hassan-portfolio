import "./About.css";
import Icon from "../../assets/about01.png";

const About = () => {
  return (
    <section id="about" className="about-wrapper container-lg">
      <div className="row g-0 align-items-center justify-content-between flex-column flex-lg-row">
        <div className="about-intro col-8 d-flex text-center text-sm-start justify-content-center flex-column gap-3">
          <div>
            <h2>About me</h2>
            <hr style={{ color: "#ff715a" }} />
          </div>
          <div>
            <p>
              I’m a passionate Full-Stack Developer who enjoys building modern,
              user-focused applications. I work mainly with JavaScript, React,
              and Node.js, and I’m comfortable handling both frontend and
              backend development.
            </p>
            <p>
              What drives me most is creating clean, scalable solutions that are
              easy to use and easy to maintain. I enjoy learning new
              technologies, refining my problem-solving skills, and
              collaborating with others to turn ideas into real, working
              products.
            </p>
            <p>
              Beyond traditional development, I’m curious about AI and enjoy
              experimenting with AI tools to improve development workflows and
              enhance web experiences.
            </p>
          </div>
        </div>
        <div className="about-icon col-4">
          <img src={Icon} alt="about icon" />
        </div>
      </div>
    </section>
  );
};

export default About;
