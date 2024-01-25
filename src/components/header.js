import React, { useState } from "react";
import "./header.css";
import Img from "react-bootstrap/Image"
import { Button } from "react-bootstrap";
import hfimage from "../images/1.jpg";
import hfimage2 from "../images/2.jpg";
import modalimg from "../images/whatssapp.png";
import modalimg2 from "../images/email.png";
import videoiconimg from "../images/video-icon.jpg";
import Contact from './contact';
import Booknow from "./booknow";


function Header(){
  const [modalShow, setModalShow] = React.useState(false);

    return(
      <div className="header" id="home">
        <div className="section__container header__container">
          <div className="header__image">
            <Img src={hfimage} alt="header" />
            <Img src={hfimage2} alt="header" />
          </div>
          <div className="header__content">
            <div>
              <p className="sub__header">Your turn</p>
              <h1>Canvas Chronicles,🏹<br />Your Journey in Ink</h1>
              <p className="section__subtitle">"Welcome to INK ADDICT TATTOO in Tangalle, where artistry and expression come together to create a unique tapestry on the canvas of your skin. We don't just ink skin; we create living, breathing works of art"
              </p>
              <div className="action__btns">
              <Button variant="primary" onClick={() => setModalShow(true)}>Book Now</Button>
                <div className="story">
                  <div className="video__image">
                    <Img src={videoiconimg} alt="story" />
                    <span>📷</span>
                  </div>
                  <span>Watch our story</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div>
        <Booknow show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </div>
      
    );
};

export default Header;