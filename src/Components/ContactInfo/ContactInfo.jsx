import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ContactInfo.css";
import { GoArrowUpRight } from "react-icons/go";

function ContactInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="action-btn-two p-0" onClick={handleShow}>
        Contact Info <GoArrowUpRight />
      </Button>

      <Modal className="contactinfo-modal" show={show} onHide={handleClose}>
        <div className="contactinfo-wrapper">
          <Modal.Header closeButton>
            <Modal.Title className="contactinfo-title">
              Contact Info
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column gap-4">
            <div>
              <h5>LinkedIn</h5>
              <a
                href="https://www.linkedin.com/in/hassan-mourtada-511072161/"
                target="_blank"
              >
                linkedin.com/in/hassan-mourtada-511072161
              </a>
            </div>
            <div>
              <h5>Email</h5>
              <a href="mailto:hassan_mourtada@live.com">
                hassan_mourtada@live.com
              </a>
            </div>
            <div>
              <h5>Phone</h5>
              <a href="tel:+96171849056">+961 71 849 056</a>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ContactInfo;
