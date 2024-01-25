import React from "react";
import './footer.css';

function Footer(){
    return(
    <footer className="footer">
    <div className="section__container footer__container">
      <div className="footer__col">
        <h3>Ink Addict<span>.</span></h3>
        <p>
          "Ink your story, wear your art."
        </p>
      </div>
      <div className="footer__col">
        <h4>Support</h4>
        <p>FAQs</p>
        <p>Terms & Conditions</p>
        <p>Contact Us</p>
      </div>
      <div className="footer__col">
        <h4>Address</h4>
        <p>
          <span>Address:</span> 108/3, Beach road, Tangalle, Sri Lanka
        </p>
        <p><span>Email:</span> hirusdn2000@gmail.com</p>
        <p><span>Phone:</span> +94 763132485</p>
      </div>
    </div>
    <div className="footer__bar">
      Copyright © 2023 Hirushan Niluminda. All rights reserved.
    </div>
  </footer>
    );
};
export default Footer;