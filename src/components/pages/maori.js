import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import "./japaneesetattoo.css";
import Img from 'react-bootstrap/Image'
import mimg1 from "./images/maori/enata.jpg";
import mimg2 from "./images/maori/ocean.jpg";
import mimg3 from "./images/maori/shark.jpg";
import mimg4 from "./images/maori/spread.jpg";
import mimg5 from "./images/maori/turtle.jpg";
import NavbarPage from "../navBarPage.js";



function Maori() {
  const [key, setKey] = useState('tab2')

  return (
    <>
    <div><NavbarPage/></div>

    <h1 className='headmain'>Maori Collection</h1>

    <div className="App">
      <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <TabList id='tabList'>
          <Tab eventKey="tab1">enata</Tab>
          <Tab eventKey="tab2">ocean</Tab>
          <Tab eventKey="tab3">shark</Tab>
          <Tab eventKey="tab4">spread</Tab>
          <Tab eventKey="tab5">turtle</Tab>
        </TabList>
        <TabPanel>
          <div className='gallery'>
          <div className="image" data-name="enata"><span><Img src={mimg1} alt=""/></span></div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="ocean"><span><Img src={mimg2} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="shark"><span><Img src={mimg3} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="spread"><span><Img src={mimg4} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="turtle"><span><Img src={mimg5} alt=""/></span></div>
        </div>
        </TabPanel>
      </Tabs>
    </div>
      </>
  )
}

export default Maori;