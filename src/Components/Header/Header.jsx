import "./Header.css";
import ProfilePic from "../../assets/profile01.png";

const Header = () => {
  return (
    <header className="header-wrapper container-lg d-flex flex-column flex-lg-row justify-content-center align-items-center text-start gap-5">
      <div className="profile-container">
        <img src={ProfilePic} alt="" />
      </div>
      <div>
        <p className="m-0">Hi. I'm</p>
        <h1>Hassan Mourtada,</h1>
        <p>
          A <span style={{ color: "#55c2a0" }}>Full stack Developer</span>{" "}
          specializing in building modern, scalable, and high-performance web
          applications using the MERN stack. <br />I focus on clean architecture,
          user-centric design, and turning complex ideas into reliable digital
          products.
        </p>
        <a
          href="/Hassan Mourtada - CV.pdf"
          download="Hassan Mourtada - CV.pdf"
          className="btn action-btn mt-4"
        >
          Download my resume
        </a>
      </div>
    </header>
  );
};

export default Header;
