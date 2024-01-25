import React from 'react';
import './App.css';
import NavBar from "./components/navbar.js";
import Header from './components/header.js';
import Collection from './components/collection.js';
import Package from './components/package.js';
import Ourworks from './components/ourworks.js';
import Subscription from './components/subscription.js';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes,useNavigate } from 'react-router-dom';
 /*
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Collection from "./components/Collection.js";
import Pricing from "./components/Pricing.js";
import Works from "./components/Works.js";*/

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/footer.js';
import Contact from './components/contact.js';
import Japaneesetattoo from './components/pages/japaneesetattoo.js';

function App() {
  
  return (
  <>
<Container fluid>
    <Row className='blue'>
    <div>< NavBar/></div>
    </Row>
    <Row className='between'>
    </Row>
    <Row className='blue'>
    <div>< Header/></div>
    </Row>
    <Row className='between'>
    </Row>
    <Row className='blue'>
    <div>< Collection/></div>
    </Row>
    <Row className='between'>
    </Row>
    <Row className='blue'>
    <div>< Package/></div>
    </Row>
    <Row className='between'>
    </Row>
    <Row className='blue'>
    <div>< Ourworks/></div>
    </Row>
    <Row className='between'>
    </Row>
    <Row className='blue'>
    <div>< Subscription/></div>
    </Row>
    <Row className='between'>
    </Row>
    <Row className='blue'>
    <div>< Footer/></div>
    </Row>
  </Container>
  </>
  );
}

export default App;
