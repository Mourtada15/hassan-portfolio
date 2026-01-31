import "./Projects.css";
import { projects } from "../../data/Projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-wrapper container-lg d-flex flex-column gap-4"
    >
      <div>
        <h2>Projects</h2>
        <hr style={{ color: "#ff715a" }} />
      </div>

      <div className="d-flex flex-column gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card row g-0 justify-content-center align-items-start align-items-sm-center"
          >
            <div className="content-card col-12 col-lg-6 d-flex flex-column gap-3 gap-sm-4">
              <div>
                <div className="mb-4">
                  <h4>{project.title}</h4>
                  <i>{project.type}</i>
                </div>
                <p>{project.description}</p>
              </div>

              <div className="d-flex flex-column gap-4">
                <div className="project-role">
                  <strong>My role:</strong>
                  <ul>
                    {project.role.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions d-flex flex-wrap align-items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn action-btn live-demo"
                  >
                    View Live Website
                  </a>
                  <i>{project.note}</i>
                </div>
              </div>

              <div className="stack-badges d-flex flex-wrap gap-2 mt-4 mt-lg-0">
                {project.stack.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-img col-12 col-sm-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.image} alt={`${project.title} preview`} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
