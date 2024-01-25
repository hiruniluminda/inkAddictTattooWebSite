// navbar.js
import React, { useState } from 'react';
import './navbar.css';
import { HashLink as Link} from 'react-router-hash-link';
import { Button } from 'react-bootstrap';
import Contact from './contact';

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="nav-app">
      <header className="nav-header">
        <nav>
          <div className="nav__logo" id="home">Ink Addict Tattoo<span>....</span></div>
          <div className="nav__links">
            <li className="link"><Link to="#home">Home</Link></li>
            <li className="link"><Link to="#collectionid">Collection</Link></li>
            <li className="link"><Link to="#package">Pricing</Link></li>
            <li className="link"><Link to="#works">Our Works</Link></li>
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

export default Navbar;
