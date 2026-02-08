import "./Footer.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-wrapper d-flex flex-column justify-content-center align-items-center"
      id="footer"
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
        >
          <IoLogoGithub />
        </a>
        <a
          className="socials-icons"
          href="https://www.linkedin.com/in/hassan-mourtada-511072161/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
        <a className="socials-icons" href="mailto:hassan_mourtada@live.com">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
