import "./Header.css";
import ProfilePic from "../../assets/profile01.png";
import ContactInfo from "../ContactInfo/ContactInfo";

const Header = () => {
  return (
    <header
      id="header"
      className="header-wrapper container-lg d-flex flex-column flex-lg-row justify-content-center align-items-center text-start gap-5"
    >
      <div className="profile-container">
        <img src={ProfilePic} alt="profile picture" />
      </div>
      <div>
        <p className="m-0">Hi, I'm</p>
        <h1>Hassan Mourtada</h1>
        <p>
          A <span style={{ color: "#55c2a0" }}>Full stack Developer</span>{" "}
          specializing in building modern, scalable, and high-performance web
          applications using the MERN stack. <br />I focus on clean
          architecture, user-centric design, and turning complex ideas into
          reliable digital products.
        </p>
        <div className="d-flex align-items-center justify-content-between justify-content-sm-start mt-4">
          <a
            href="/Hassan Mourtada - CV.pdf"
            download="Hassan Mourtada - CV.pdf"
            className="btn action-btn"
          >
            Download my resume
          </a>
          <div className="ps-sm-5">
            <ContactInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
