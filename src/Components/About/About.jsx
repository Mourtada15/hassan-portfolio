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
        <p>
          I specialize in building modern web applications using JavaScript,
          React, and Node.js, with experience across the full stack. I enjoy
          creating clean, scalable, and responsive solutions that deliver a
          smooth user experience. Collaboration and continuous learning are at
          the heart of my work—I like exploring new technologies, improving my
          code, and bringing projects from idea to reality. Outside of coding,
          I’m passionate about experimenting with AI tools to enhance web
          development and streamline workflows.
        </p>
      </div>
      <div className="about-icon d-flex justify-content-center justify-content-lg-end">
        <img src={Icon} alt="" />
      </div>
    </section>
  );
};

export default About;
