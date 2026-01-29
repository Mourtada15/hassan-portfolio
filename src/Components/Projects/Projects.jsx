import "./Projects.css";
import PH01 from "../../assets/ph01.jpg";
import PH02 from "../../assets/ph02.jpg";
import PH03 from "../../assets/ph03.jpg";

const Projects = () => {
  return (
    <section className="projects-wrapper container-lg d-flex flex-column gap-4">
      <h2>Projects</h2>
      <div className="d-flex flex-column gap-4">
        <div className="project-card row flex-column flex-lg-row justify-content-center align-items-start align-items-sm-center">
          <div className="project-img col-12 col-sm-6">
            <img src={PH01} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <h4>Project One title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ipsam! Dignissimos tenetur possimus totam quae odio, repudiandae
              dolorum ullam quidem molestias, accusamus a porro neque, hic quo
              voluptate nulla sint.
            </p>
          </div>
        </div>
        <div className="project-card row flex-column flex-lg-row justify-content-center align-items-start align-items-sm-center">
          <div className="project-img col-12 col-sm-6">
            <img src={PH02} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <h4>Projects two title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ipsam! Dignissimos tenetur possimus totam quae odio, repudiandae
              dolorum ullam quidem molestias, accusamus a porro neque, hic quo
              voluptate nulla sint.
            </p>
          </div>
        </div>
        <div className="project-card row flex-column flex-lg-row justify-content-center align-items-start align-items-sm-center">
          <div className="project-img col-12 col-sm-6">
            <img src={PH03} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <h4>Projects three title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ipsam! Dignissimos tenetur possimus totam quae odio, repudiandae
              dolorum ullam quidem molestias, accusamus a porro neque, hic quo
              voluptate nulla sint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
