import React from "react";
import './ourworks.css';
import Img from 'react-bootstrap/Image';
import { Button } from "react-bootstrap";
import img113 from '../images/11 (3).jpg';
import img111 from '../images/11 (1).jpg';
import img112 from "../images/11 (2).jpg";
import { Link } from "react-router-dom";

function Ourworks(){
    return(
        
    <section className="function" id="works">
    <div className="section__container function__container">
      <div className="image__function">
        <div className="function__col">
          <Img src={img111} alt="function" />
        </div>
        <div className="function__col">
          <Img src={img112} alt="function" />
          <Img src={img113} alt="function" />
        </div>
      </div>
      <div className="function__content">
        <div>
          <h2 className="section__title">
            Our Works, Function and awards
          </h2>
          <p className="section__subtitle">
            Ink it with confidence, wear it with pride.
          </p>
          <Link to="/upcoming">
          <Button class="btn">View All</Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
    );
};
export default Ourworks;