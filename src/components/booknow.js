import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React, { useEffect } from "react";
import "./booknow.css";

function Booknow(props) {
  return (
    <Modal {...props}>
      <Modal.Body>
      <Button className='close' onClick={props.onHide}> X</Button>
                  <h2>Book Now(fill this form and send)🧸</h2>
                  <p className="modal-img-p">
                    <section className="sec_container contact_cont" id="contact">
                      <h4 className="sec_head">we will connect you soon please wait....</h4>
                      <form className="contact__form" action="https://formcarry.com/s/bv_pwZ_BhV7" method="post" enctype="multipart/form-data">
                        <div className="input_row">
                          <input id="first_name" name="first_name" type="text" placeholder="First Name" />
                          <input id="last_name" name="last_name" type="text" placeholder="Last Name" />
                          </div>
                        <div className="input_row">
                        <input id="email" name="email" type="email" placeholder="Email" />
                        <input id="desc" name="desc" placeholder="Description" />
                      </div>
                        <Button className="btn" id="form-btn" type="submit">Submit</Button>
                        <input type="hidden" name="_next" value="https://yourthank.you/page"/>
                      </form>
                    </section>
                  </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}
export default Booknow;