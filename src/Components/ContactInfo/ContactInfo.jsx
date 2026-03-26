import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ContactInfo.css";
import { GoArrowUpRight } from "react-icons/go";
import {
  trackCTA,
  trackContactAction,
  trackSocialClick,
} from "../../lib/analytics";

function ContactInfo({ ctaLocation = "hero" }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    trackCTA({
      eventName: "hero_secondary_cta_click",
      cta_name: "open_contact_info",
      cta_location: ctaLocation,
      destination_type: "modal",
    });
    setShow(true);
  };

  return (
    <>
      <Button
        className="action-btn-two p-0"
        data-analytics-cta="open_contact_info"
        onClick={handleShow}
      >
        Contact Info <GoArrowUpRight />
      </Button>

      <Modal className="contactinfo-modal" show={show} onHide={handleClose}>
        <div className="contactinfo-wrapper">
          <Modal.Header closeButton>
            <Modal.Title className="contactinfo-title">
              Get in touch
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column gap-4">
            <div>
              <h5>LinkedIn</h5>
              <a
                href="https://www.linkedin.com/in/hassan-mourtada-511072161/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackSocialClick({
                    actionType: "linkedin_click",
                    ctaLocation: "contact_modal",
                    linkLabel: "linkedin_profile",
                    linkUrl:
                      "https://www.linkedin.com/in/hassan-mourtada-511072161/",
                  })
                }
              >
                linkedin.com/in/hassan-mourtada-511072161
              </a>
            </div>
            <div>
              <h5>Email</h5>
              <a
                href="mailto:hassan_mourtada@live.com"
                onClick={() =>
                  trackContactAction({
                    actionType: "email_click",
                    ctaLocation: "contact_modal",
                    linkLabel: "email_link",
                    linkUrl: "mailto:hassan_mourtada@live.com",
                  })
                }
              >
                hassan_mourtada@live.com
              </a>
            </div>
            <div>
              <h5>Phone</h5>
              <a
                href="tel:+96171849056"
                onClick={() =>
                  trackContactAction({
                    actionType: "phone_click",
                    ctaLocation: "contact_modal",
                    linkLabel: "phone_link",
                    linkUrl: "tel:+96171849056",
                  })
                }
              >
                +961 71 849 056
              </a>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ContactInfo;
