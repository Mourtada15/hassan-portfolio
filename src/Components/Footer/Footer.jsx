import "./Footer.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { trackContactAction, trackSocialClick } from "../../lib/analytics";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-wrapper d-flex flex-column justify-content-center align-items-center"
      id="footer"
      data-analytics-section="footer"
    >
      <h2 className="mb-3">Hassan Mourtada</h2>

      <small className="mb-3 text-center">
        Designed with care ❤️ | © {year} Hassan Mourtada. All rights reserved.
      </small>

      <div className="socials-wrapper d-flex gap-3">
        <a
          className="socials-icons"
          href="https://github.com/Mourtada15"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Hassan Mourtada's GitHub profile"
          onClick={() =>
            trackSocialClick({
              actionType: "github_click",
              ctaLocation: "footer",
              linkLabel: "github_profile",
              linkUrl: "https://github.com/Mourtada15",
            })
          }
        >
          <IoLogoGithub />
        </a>
        <a
          className="socials-icons"
          href="https://www.linkedin.com/in/hassan-mourtada-511072161/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Hassan Mourtada's LinkedIn profile"
          onClick={() =>
            trackSocialClick({
              actionType: "linkedin_click",
              ctaLocation: "footer",
              linkLabel: "linkedin_profile",
              linkUrl:
                "https://www.linkedin.com/in/hassan-mourtada-511072161/",
            })
          }
        >
          <IoLogoLinkedin />
        </a>
        <a
          className="socials-icons"
          href="mailto:hassan_mourtada@live.com"
          aria-label="Send an email to Hassan Mourtada"
          onClick={() =>
            trackContactAction({
              actionType: "email_click",
              ctaLocation: "footer",
              linkLabel: "email_link",
              linkUrl: "mailto:hassan_mourtada@live.com",
            })
          }
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
