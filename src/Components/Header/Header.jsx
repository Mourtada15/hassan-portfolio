import "./Header.css";
import ProfilePic from "../../assets/profile01.png";
import ContactInfo from "../ContactInfo/ContactInfo";
import {
  getDestinationType,
  sanitizeLinkUrl,
  trackResumeDownload,
} from "../../lib/analytics";

const Header = () => {
  const resumeHref = "/Hassan Mourtada - CV.pdf";
  const resumeFileName = "Hassan Mourtada - CV.pdf";

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
          A <span style={{ color: "#55c2a0" }}>Full-Stack Developer</span> with
          a systems mindset, specializing in building modern, scalable, and
          high-performance web applications using the MERN stack. <br />I focus
          on clean architecture, reliable delivery, and using AI-assisted
          workflows to speed up development, improve debugging, and turn complex
          ideas into maintainable digital products.
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
