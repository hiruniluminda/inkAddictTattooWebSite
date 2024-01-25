import React from "react";
import "./package.css";
import { Link } from "react-router-dom";
import Img from 'react-bootstrap/Image'
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img10 from "../images/10.jpg";
import { Button } from "react-bootstrap";
import Booknow from "./booknow";


function Package(){
  const [modalShow, setModalShow] = React.useState(false);

    return(
<>  
    <div className="secback">
    <section className="tat" id="package">
      <div className="section__container tat_container">
        <h2 className="section__title">Best Tattoo package</h2>
        <p className="section__subtitle">
          "Your body, your tattoo, our expertise."
        </p>
        <div className="tat_grid">
          <div className="tat_card">
            <Img src={img6} alt="tattoo" />
            <div className="tat_details">
              <p>Full body</p>
              <div className="rating"><i class="ri-star-fill"></i> 4.7</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $1000</div>
                <Button className="book__now" variant="primary" onClick={() => setModalShow(true)}>Book Now</Button>
              </div>
            </div>
          </div>
          <div className="tat_card">
            <Img src={img7} alt="tattoo" />
            <div className="tat_details">
              <p>chest tattoo</p>
              <div className="rating"><i class="ri-star-fill"></i> 4.2</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $580</div>
                <Button className="book__now" variant="primary" onClick={() => setModalShow(true)}>Book Now</Button>
              </div>
            </div>
          </div>
          <div className="tat_card">
            <Img src={img10} alt="tattoo" />
            <div className="tat_details">
              <p>Hand tattoo</p>
              <div className="rating"><i class="ri-star-fill"></i> 4.9</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $280</div>
                <Button className="book__now" variant="primary" onClick={() => setModalShow(true)}>Book Now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="view__all">
          <Link to="/upcoming">
          <Button className="btn">View All</Button>
          </Link>
        </div>
        <Booknow show={modalShow} onHide={() => setModalShow(false)}/>

      </div>
    </section>
  </div>
              {/*Modal*/}{/*
              <div id="myModal2" class="modal">
                <div class="modal-content">
                  <span class="close2" id="close2">&times;</span>
                  <h2>Book Now(fill this form and send)🧸</h2>

                  <p class="modal-img-p">

                    <section class="sec_container contact_cont" id="contact">
                      <h4 class="sec_head">we will connect you soon please wait....</h4>
                      <form class="contact__form" action="https://formcarry.com/s/bv_pwZ_BhV7" method="post" enctype="multipart/form-data">
                        
                        <div class="input_row">
                          <input id="first_name" name="first_name" type="text" placeholder="First Name" />
                          <input id="last_name" name="last_name" type="text" placeholder="Last Name" />
                          <br></br>
                        <input id="email" name="email" type="email" placeholder="Email" />
                        <input id="desc" name="desc" placeholder="Description" />
                       </div>
                        <button class="btn" id="form-btn" type="submit">Submit</button>
                        <input type="hidden" name="_next" value="https://yourthank.you/page"/>
                      </form>
                    </section>
                  </p>
                </div>
                </div>*/}
    </>
    );
}
export default Package;