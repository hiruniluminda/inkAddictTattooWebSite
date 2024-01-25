import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import "./japaneesetattoo.css";
import Img from 'react-bootstrap/Image'
import pimg1 from "./images/polynesian/Samoan.jpg";
import pimg2 from "./images/polynesian/gecko.jpg";
import pimg3 from "./images/polynesian/mar.jpg";
import pimg4 from "./images/polynesian/shell.jpg";
import pimg5 from "./images/polynesian/tiki.webp";
import NavbarPage from "../navBarPage.js";



function Polynesian() {
  const [key, setKey] = useState('tab2')

  return (
    <>
    <div><NavbarPage/></div>

    <h1 className='headmain'>Polynesian Collection</h1>

    <div className="App">
      <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <TabList id='tabList'>
          <Tab eventKey="tab1">Samoan</Tab>
          <Tab eventKey="tab2">gecko</Tab>
          <Tab eventKey="tab3">mar</Tab>
          <Tab eventKey="tab4">shell</Tab>
          <Tab eventKey="tab5">tiki</Tab>
        </TabList>
        <TabPanel>
          <div className='gallery'>
          <div className="image" data-name="Samoan"><span><Img src={pimg1} alt=""/></span></div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="gecko"><span><Img src={pimg2} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="mar"><span><Img src={pimg3} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="shell"><span><Img src={pimg4} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="tiki"><span><Img src={pimg5} alt=""/></span></div>
        </div>
        </TabPanel>
      </Tabs>
    </div>
      </>
  )
}

export default Polynesian;