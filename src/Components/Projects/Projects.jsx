import "./Projects.css";
import { projects } from "../../data/Projects";
import {
  getDestinationType,
  sanitizeLinkUrl,
  trackProjectClick,
  trackProjectDemoClick,
} from "../../lib/analytics";

const Projects = () => {
  const getProjectAnalytics = (project) => ({
    project_name: project.title,
    project_category: "client_project",
    tech_stack: project.stack,
    featured: false,
  });

  return (
    <section
      id="projects"
      className="projects-wrapper container-lg d-flex flex-column gap-4"
      data-analytics-section="projects"
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
            data-analytics-project={project.id}
            data-project-name={project.title}
            data-project-category="client_project"
            data-tech-stack={project.stack.join(", ")}
            data-featured="false"
            data-cta-location="projects_section"
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
                    data-analytics-cta={`${project.id}_live_demo`}
                    onClick={() =>
                      trackProjectDemoClick({
                        ...getProjectAnalytics(project),
                        cta_location: "projects_primary_cta",
                        link_label: "live_demo",
                        link_url: sanitizeLinkUrl(project.liveUrl),
                        destination_type: getDestinationType(project.liveUrl),
                      })
                    }
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
                onClick={() =>
                  trackProjectClick({
                    ...getProjectAnalytics(project),
                    cta_location: "projects_image",
                    link_label: "project_preview",
                    link_url: sanitizeLinkUrl(project.liveUrl),
                    destination_type: getDestinationType(project.liveUrl),
                  })
                }
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
