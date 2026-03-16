import "./PersonalProjects.css";
import { personalProjects } from "../../data/PersonalProjects";

const panelLayoutClasses = [
  "panel-xl",
  "panel-sm",
  "panel-sm",
  "panel-md",
  "panel-md",
];

const PersonalProjects = () => {
  return (
    <section
      id="personal-projects"
      className="personal-projects-wrapper container-lg d-flex flex-column gap-5"
      aria-labelledby="personal-projects-title"
    >
      <div>
        <h2 id="personal-projects-title">Personal Projects</h2>
        <hr style={{ color: "#ff715a" }} />
      </div>

      <div className="personal-projects-list d-flex flex-column gap-5">
        {personalProjects.map((project, index) => {
          const projectNumber = String(index + 1).padStart(2, "0");

          return (
            <article key={project.id} className="personal-project-showcase">
              <div className="personal-project-hero">
                <span className="personal-project-number" aria-hidden="true">
                  {projectNumber}
                </span>

                <div className="personal-project-copy">
                  <p className="personal-project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="personal-project-summary mb-0">
                    {project.description}
                  </p>
                </div>

                <aside className="personal-project-callout">
                  <p className="personal-project-callout-label mb-0">
                    Project Lens
                  </p>
                  <p className="personal-project-overview mb-0">
                    {project.overview}
                  </p>

                  {(project.liveUrl || project.repoUrl) && (
                    <div className="personal-project-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="personal-project-link"
                          aria-label={`View ${project.title} live website`}
                        >
                          View Live Website
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="personal-project-link personal-project-link-secondary"
                          aria-label={`View ${project.title} GitHub repository`}
                        >
                          View GitHub Repo
                        </a>
                      )}
                    </div>
                  )}
                </aside>
              </div>

              <div className="personal-project-grid">
                {project.featureGroups.map((group, groupIndex) => (
                  <section
                    className={`personal-project-panel ${
                      panelLayoutClasses[groupIndex] ?? "panel-standard"
                    }`}
                    key={group.title}
                  >
                    <div className="personal-project-panel-header">
                      <span
                        className="personal-project-panel-index"
                        aria-hidden="true"
                      >
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      <h4>{group.title}</h4>
                    </div>
                    <ul className="mb-0">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}

                <section className="personal-project-panel personal-project-stack-panel">
                  <div className="personal-project-panel-header">
                    <span className="personal-project-panel-index">Stack</span>
                    <h4>Tech Stack</h4>
                  </div>
                  <div className="stack-badges d-flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PersonalProjects;
