import { useState } from "react";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-wrapper">
      <div className="container-fluid">
        <button
          className={`navbar-toggler nav-menu-button p-0 ${
            expanded ? "is-open" : ""
          }`}
          type="button"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          {expanded ? (
            <span className="">
              <RxCross2 />
            </span>
          ) : (
            <span className="">
              <RiMenu2Fill />
            </span>
          )}
        </button>
        <div
          className={`navbar-collapse navbar-container  ${
            expanded ? "navbar-open" : "navbar-closed"
          }`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-start">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeNavbar}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNavbar}>
                Projects
              </a>
            </li>
          </ul>

          <a
            className="socials-icons nav-github"
            href="https://github.com/Mourtada15"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNavbar}
          >
            <IoLogoGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
