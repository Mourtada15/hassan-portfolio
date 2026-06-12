import "./Header.css";
import ProfilePic from "../../assets/profile01.png";
import ContactInfo from "../ContactInfo/ContactInfo";
import {
  getDestinationType,
  sanitizeLinkUrl,
  trackResumeDownload,
} from "../../lib/analytics";

const Header = () => {
  const resumeHref = "/Hassan Mourtada_CV.docx.pdf";
  const resumeFileName = "Hassan Mourtada_CV.docx.pdf";

  const handleResumeClick = () => {
    trackResumeDownload({
      cta_location: "hero",
      file_name: resumeFileName,
      link_label: "resume_pdf",
      link_url: sanitizeLinkUrl(resumeHref),
      destination_type: getDestinationType(resumeHref),
    });
  };

  return (
    <header
      id="header"
      className="header-wrapper container-lg d-flex flex-column flex-lg-row justify-content-center align-items-center text-start gap-5"
      data-analytics-section="hero"
    >
      <div className="profile-container">
        <img
          src={ProfilePic}
          alt="Portrait of Hassan Mourtada"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div>
        <p className="m-0">Hi, I'm</p>
        <h1>Hassan Mourtada</h1>
        <p>
          <span style={{ color: "#55c2a0" }}>React & JavaScript Developer</span>{" "}
          <br />
          I build modern, responsive web applications with React and JavaScript
          and enjoy turning ideas into clean, maintainable, and user-focused
          solutions.
          <br />
          Alongside my professional frontend experience, I completed intensive
          full-stack web development bootcamp and continue expanding my
          expertise through hands-on MERN projects.
        </p>
        <div className="d-flex align-items-center justify-content-between justify-content-sm-start mt-4">
          <a
            href={resumeHref}
            download={resumeFileName}
            className="btn action-btn"
            data-analytics-cta="download_resume"
            onClick={handleResumeClick}
          >
            Download my resume
          </a>
          <div className="ps-sm-5">
            <ContactInfo ctaLocation="hero" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
