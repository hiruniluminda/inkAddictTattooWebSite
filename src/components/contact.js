import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import "./contact.css";
import Img from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import modalimg from "../images/whatssapp.png";
import modalimg2 from "../images/email.png"; 


function Contact(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">        
        <Button className='close' onClick={props.onHide}>X</Button>
        <h2>Select One Option:🧸</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p className="modal-img-p">
          <Link to="https://wa.me/+94763132485" target="_blank">
            <Img className="modal-img" src={modalimg} alt="WhatsApp" />
          </Link>
          <Link to="mailto:hirusdn2000@gmail.com" target="_blank">
            <Img className="modal-img" src={modalimg2} alt="Email" />
          </Link>
        </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}
export default Contact;