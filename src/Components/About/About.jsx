import "./About.css";
import Icon from "../../assets/about01.png";

const About = () => {
  return (
    <section className="about-wrapper container-lg d-flex flex-column flex-lg-row gap-5">
      <div className="about-intro d-flex text-center text-sm-start justify-content-center flex-column gap-3">
        <div>
          <h2>About me</h2>
          <hr className="mt-0" style={{ color: "#ff715a" }} />
        </div>
        <div>
          <p>
            I’m a passionate Full-Stack Web Developer who enjoys building
            modern, user-focused web applications. I work mainly with
            JavaScript, React, and Node.js, and I’m comfortable handling both
            frontend and backend development.
          </p>
          <p>
            What drives me most is creating clean, scalable solutions that are
            easy to use and easy to maintain. I enjoy learning new technologies,
            refining my problem-solving skills, and collaborating with others to
            turn ideas into real, working products.
          </p>{" "}
          <p>
            Beyond traditional web development, I’m curious about AI and enjoy
            experimenting with AI tools to improve development workflows and
            enhance web experiences.
          </p>
        </div>
      </div>
      <div className="about-icon d-flex justify-content-center justify-content-lg-end">
        <img src={Icon} alt="" />
      </div>
    </section>
  );
};

export default About;
