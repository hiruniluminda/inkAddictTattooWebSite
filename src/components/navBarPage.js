// navbar.js
import React, { useState } from 'react';
import './navbar.css';
import { HashLink as Link} from 'react-router-hash-link';
import { Button } from 'react-bootstrap';
import Contact from './contact';

const NavbarPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="nav-app">
      <header className="nav-header">
        <nav>
          <Link to="/">
          <div className="nav__logo" id="home">Ink Addict Tattoo<span>....</span></div>
          </Link>
          <div className="nav__links">
            <p style={{color:"white",fontFamily:"cursive",wordSpacing:"2px"}}>Each Tattoo Tells A Tale, A Chapter Of Your Journey.</p>
          </div>
          <Button variant="primary" onClick={() => setModalShow(true)}>
        Contact
      </Button>
      <Contact
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </nav>
      </header>
      
    </div>
  );
};

export default NavbarPage;
