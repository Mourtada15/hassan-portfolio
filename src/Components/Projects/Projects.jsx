import "./Projects.css";
import PV01 from "../../assets/revent.png";
import PV02 from "../../assets/unilink.png";
import PV03 from "../../assets/beta.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects-wrapper container-lg d-flex flex-column gap-4">
      <div>
        <h2>Projects</h2>
        <hr style={{ color: "#ff715a" }} />
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="project-card row g-0 justify-content-center align-items-start align-items-sm-center">
          <div className="content-card col-12 col-lg-6 d-flex flex-column gap-3 gap-sm-4">
            <div>
              <div className="mb-4">
                <h4>Revent</h4>
                <i>Frontend Web Application (Client Project)</i>
              </div>
              <p>
                A production website built for a real client. I translated Figma
                designs into a responsive React application, focusing on
                performance, UX, and clean architecture.
              </p>
            </div>
            <div className="d-flex flex-column gap-4">
              <p className="project-role">
                <strong>My role:</strong>
                <ul>
                  <li>Built responsive UI from Figma designs</li>
                  <li>Implemented contact form with Resend email handling</li>
                  <li>Optimized frontend performance and user experience</li>
                  <li>Collaborated via PR reviews and team workflows</li>
                </ul>
              </p>
              <div className="project-actions d-flex flex-wrap align-items-center gap-4">
                <Link
                  to="https://reventme.com/"
                  target="_blank"
                  className="btn action-btn live-demo"
                >
                  View Live Website
                </Link>
                <i>Developed as part of a professional team.</i>
                {/* <a href="#" target="_blank" className="btn action-btn">
                  GitHub
                </a> */}
              </div>
            </div>

            <div className="stack-badges d-flex flex-wrap gap-2 mt-4 mt-lg-0">
              <span className="badge">React</span>
              <span className="badge">Vite</span>
              <span className="badge">JavaScript</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">Git</span>
              <span className="badge">Figma</span>
            </div>
          </div>
          <div className="project-img col-12 col-sm-6">
            <a
              href="https://reventme.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PV01} alt="Reventme preview" />
            </a>
          </div>
        </div>

        <div className="project-card row g-0 justify-content-center align-items-start align-items-sm-center">
          <div className="content-card col-12 col-lg-6 d-flex flex-column gap-3 gap-sm-4">
            <div>
              <div className="mb-4">
                <h4>Unilink Trading</h4>
                <i>Full Stack Web Application (Client Project)</i>
              </div>
              <p>
                A corporate website built for a real client, featuring a modern
                frontend and a custom backend to handle business inquiries and
                document delivery.
              </p>
            </div>
            <div className="d-flex flex-column gap-4">
              <p className="project-role">
                <strong>My role:</strong>{" "}
                <ul>
                  <li>
                    Built and maintained the frontend based on Figma designs
                  </li>
                  <li>Developed RESTful APIs with Node.js and MongoDB</li>
                  <li>
                    Implemented server-side validation and email handling with
                    Resend
                  </li>
                  <li>
                    Tested APIs using Postman and collaborated through PR
                    reviews
                  </li>
                </ul>
              </p>
              <div className="project-actions d-flex flex-wrap align-items-center gap-4">
                <Link
                  to="https://unilinktrading.com/"
                  target="_blank"
                  className="btn action-btn live-demo"
                >
                  View Live Website
                </Link>
                <i>Developed as part of a professional team.</i>
                {/* <a href="#" target="_blank" className="btn action-btn">
                  GitHub
                </a> */}
              </div>
            </div>
            <div className="stack-badges d-flex flex-wrap gap-2 mt-4 mt-lg-0">
              <span className="badge">React</span>
              <span className="badge">Vite</span>
              <span className="badge">JavaScript</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">Git</span>
              <span className="badge">Figma</span>
              <span className="badge">Node.js</span>
              <span className="badge">Express</span>
              <span className="badge">MongoDB</span>
            </div>
          </div>
          <div className="project-img col-12 col-sm-6">
            <a
              href="https://unilinktrading.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PV02} alt="" />
            </a>
          </div>
        </div>
        <div className="project-card row g-0 justify-content-center align-items-start align-items-sm-center">
          <div className="content-card col-12 col-lg-6 d-flex flex-column gap-3 gap-sm-4">
            <div>
              <div className="mb-4">
                <h4>Beta Capital</h4>
                <i>Frontend Web Application (Client Project)</i>
              </div>
              <p>
                A multilingual corporate website built for a real client,
                featuring a responsive UI, email contact functionality, and SEO
                optimization. I translated the site into 6 languages and
                implemented dynamic language switching using React.
              </p>
            </div>
            <div className="d-flex flex-column gap-4">
              <p className="project-role">
                <strong>My role:</strong>
                <ul>
                  <li>Developed frontend from Figma designs</li>
                  <li>Implemented multilingual support using react-i18next</li>
                  <li>
                    Integrated language selector and managed translations (with
                    AI assistance)
                  </li>
                  <li>Built responsive UI and optimized SEO</li>
                  <li>
                    Implemented a contact form with Resend for email delivery
                  </li>
                </ul>
              </p>
              <div className="project-actions d-flex flex-wrap align-items-center gap-4">
                <Link
                  to="https://betacapitalx.com/"
                  target="_blank"
                  className="btn action-btn live-demo"
                >
                  View Live Website
                </Link>
                <i>Developed as part of a professional team.</i>
                {/* <a href="#" target="_blank" className="btn action-btn github">
                  GitHub
                </a> */}
              </div>
            </div>
            <div className="stack-badges d-flex flex-wrap gap-2 mt-4 mt-lg-0">
              <span className="badge">React</span>
              <span className="badge">react-i18next</span>
              <span className="badge">Vite</span>
              <span className="badge">JavaScript</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">Git</span>
              <span className="badge">Figma</span>
            </div>
          </div>
          <div className="project-img col-12 col-sm-6">
            <a
              href="https://betacapitalx.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PV03} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
