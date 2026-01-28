import "./Footer.css";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer-wrapper d-flex flex-column justify-content-center align-items-center py-5">
      <h2 className="mb-4">Hassan Mourtada</h2>
      <div className="text-center">
        <p>Designed with love, allrights reserved for Hassan Mourtada</p>
      </div>
      <div className="socials-wrapper d-flex gap-3">
        <a className="socials-icons" href="https://github.com/Mourtada15" target="_blank">
          <IoLogoGithub />
        </a>
        <a className="socials-icons" href="https://www.linkedin.com/in/hassan-mourtada-511072161/" target="_blank">
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
