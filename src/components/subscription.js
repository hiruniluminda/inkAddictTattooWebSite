import React from "react";
import './subcription.css';
import { Button } from "react-bootstrap";


function Subcription(){
    return(
        <section className="subscribe">
        <div className="section__container subscribe__container">
          <div className="subscribe__content">
            <h2 className="section__title">Subscribe to get special Discount</h2>
            <p className="section__subtitle">
              Beyond the Surface....Ink Addict Tattoo
            </p>
          </div>
          <div className="subscribe__form">
            <form>
              <input type="email" placeholder="Your email here" />
              <Button className="btn" type="submit">Send</Button>
            </form>
          </div>
        </div>
      </section>
    );
};
export default Subcription;