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
      <div className="personal-projects-heading">
        <p className="personal-projects-kicker mb-2">Build Log</p>
        <h2 id="personal-projects-title">Personal Projects</h2>
        <p className="personal-projects-intro mb-0">
          Independent products built to explore system design, AI workflows,
          and production-style engineering decisions beyond client constraints.
        </p>
        <hr className="personal-projects-rule" />
      </div>

      <div className="personal-projects-list d-flex flex-column gap-5">
        {personalProjects.map((project, index) => {
          const projectNumber = String(index + 1).padStart(2, "0");
          const featureCount = String(project.featureGroups.length).padStart(
            2,
            "0",
          );
          const stackCount = String(project.stack.length).padStart(2, "0");
          const projectAccess = project.liveUrl && project.repoUrl
            ? "Live + Source"
            : project.liveUrl
              ? "Live Build"
              : "Source Available";
          const sourceMode = project.repoUrl ? "Public" : "Private";

          return (
            <article key={project.id} className="personal-project-showcase">
              <div className="personal-project-hero">
                <span className="personal-project-number" aria-hidden="true">
                  {projectNumber}
                </span>

                <div className="personal-project-copy">
                  <div className="personal-project-copy-top">
                    <p className="personal-project-type">{project.type}</p>
                    <div className="personal-project-inline-metrics">
                      <span>{featureCount} modules</span>
                      <span>{stackCount} technologies</span>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="personal-project-summary mb-0">
                    {project.description}
                  </p>
                </div>

                <aside className="personal-project-callout">
                  <div className="personal-project-callout-head">
                    <p className="personal-project-callout-label mb-0">
                      System Brief
                    </p>
                    <span className="personal-project-callout-status">
                      {projectAccess}
                    </span>
                  </div>
                  <p className="personal-project-overview mb-0">
                    {project.overview}
                  </p>

                  <div className="personal-project-metrics">
                    <div className="personal-project-metric">
                      <span className="personal-project-metric-value">
                        {featureCount}
                      </span>
                      <span className="personal-project-metric-label">
                        Modules
                      </span>
                    </div>
                    <div className="personal-project-metric">
                      <span className="personal-project-metric-value">
                        {stackCount}
                      </span>
                      <span className="personal-project-metric-label">
                        Technologies
                      </span>
                    </div>
                    <div className="personal-project-metric">
                      <span className="personal-project-metric-value">
                        {sourceMode}
                      </span>
                      <span className="personal-project-metric-label">
                        Source Mode
                      </span>
                    </div>
                  </div>

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
                          Open Live Build
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
                          Inspect Source
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
                      <div className="personal-project-panel-topline">
                        <span
                          className="personal-project-panel-index"
                          aria-hidden="true"
                        >
                          {String(groupIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="personal-project-panel-tag">
                          Module
                        </span>
                      </div>
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
                    <div className="personal-project-panel-topline">
                      <span className="personal-project-panel-tag">Summary</span>
                    </div>
                    <h4>Technology Matrix</h4>
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
