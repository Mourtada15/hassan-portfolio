import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import "./Privacy.css";

const LAST_UPDATED = "March 27, 2026";

const Privacy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | Hassan Mourtada";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <section className="privacy-page">
        <div className="privacy-topbar">
          <div className="container-lg d-flex justify-content-between align-items-center gap-3 flex-wrap">
            <Link className="privacy-home-link" to="/">
              Hassan Mourtada
            </Link>
            <Link className="privacy-back-link" to="/">
              Back to portfolio
            </Link>
          </div>
        </div>

        <div className="privacy-body container-lg">
          <article className="privacy-document">
            <header className="privacy-header">
              <p className="privacy-kicker">Privacy Policy</p>
              <h1>Privacy Policy</h1>
              <p className="privacy-intro">
                This page explains, in plain language, what limited information
                may be collected when you visit this portfolio and how it is
                used.
              </p>
              <p className="privacy-updated">Last updated: {LAST_UPDATED}</p>
            </header>

            <section className="privacy-section">
              <h2>What information is collected</h2>
              <p>
                This website uses analytics tools to understand how visitors
                interact with the site and to improve the website over time.
              </p>
              <ul className="privacy-list">
                <li>Pages visited</li>
                <li>Clicks and navigation behavior</li>
                <li>Scroll behavior and general engagement</li>
                <li>Device and browser type</li>
                <li>Approximate location and traffic source</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>How the information is used</h2>
              <p>
                Analytics data is used to understand portfolio traffic, improve
                content and navigation, and see which sections or links are most
                useful to visitors.
              </p>
              <p>
                Contact actions such as clicking email, social, project, or
                resume links may also be measured as interaction events.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Analytics tools used</h2>
              <p>
                This website uses Google Analytics 4 and Microsoft Clarity.
                These tools help measure site usage and understand how visitors
                move through the portfolio so the experience can be improved.
              </p>
            </section>

            <section className="privacy-section">
              <h2>What is not collected</h2>
              <p>
                No personally identifiable information is intentionally
                collected through analytics on this website.
              </p>
              <p>
                Message contents or sensitive personal data are not tracked
                through analytics.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Your choices</h2>
              <p>
                If you prefer, you can limit analytics through browser privacy
                settings, extensions, or other privacy tools available to you.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Contact</h2>
              <p>
                If you contact me directly, any information you provide is only
                what you choose to share through that channel and is used only
                to respond to your message.
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy;
