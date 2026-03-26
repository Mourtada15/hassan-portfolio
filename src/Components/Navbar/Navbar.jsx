import { useState } from "react";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";
import {
  trackMobileMenuItemClick,
  trackMobileMenuOpen,
  trackNavClick,
  trackSocialClick,
} from "../../lib/analytics";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const getNavType = () =>
    window.matchMedia("(max-width: 991.98px)").matches ? "mobile" : "desktop";

  const handleNavClick = (targetSection) => {
    const navType = getNavType();

    trackNavClick({
      target_section: targetSection,
      nav_type: navType,
      cta_location: "navbar",
    });

    if (navType === "mobile") {
      trackMobileMenuItemClick({
        target_section: targetSection,
        nav_type: navType,
        cta_location: "navbar",
      });
    }

    setExpanded(false);
  };

  const toggleNavbar = () => {
    setExpanded((currentExpanded) => {
      const nextExpanded = !currentExpanded;

      if (nextExpanded) {
        trackMobileMenuOpen({
          nav_type: "mobile",
          cta_location: "navbar",
        });
      }

      return nextExpanded;
    });
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
              <a
                className="nav-link"
                href="#header"
                data-analytics-nav="hero"
                onClick={() => handleNavClick("hero")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                data-analytics-nav="about"
                onClick={() => handleNavClick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                data-analytics-nav="skills"
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                data-analytics-nav="projects"
                onClick={() => handleNavClick("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#personal-projects"
                data-analytics-nav="personal_projects"
                onClick={() => handleNavClick("personal_projects")}
              >
                Personal Projects
              </a>
            </li>
          </ul>

          <a
            className="socials-icons nav-github"
            href="https://github.com/Mourtada15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Hassan Mourtada's GitHub profile"
            onClick={() => {
              trackSocialClick({
                actionType: "github_click",
                ctaLocation: "navbar",
                linkLabel: "github_profile",
                linkUrl: "https://github.com/Mourtada15",
              });
              setExpanded(false);
            }}
          >
            <IoLogoGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
