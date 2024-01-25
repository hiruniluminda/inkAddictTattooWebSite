import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import "./japaneesetattoo.css";
import Img from 'react-bootstrap/Image'
import oimg1 from "./images/ornamental/celtics.jpg";
import oimg2 from "./images/ornamental/henna.jpg";
import oimg3 from "./images/ornamental/knots.jpg";
import oimg4 from "./images/ornamental/lotus.jpg";
import oimg5 from "./images/ornamental/mandala.jpg";
import NavbarPage from "../navBarPage.js";



function Ornamental() {
  const [key, setKey] = useState('tab2')

  return (
    <>
    <div><NavbarPage/></div>

    <h1 className='headmain'>Ornamental Collection</h1>

    <div className="App">
      <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <TabList id='tabList'>
          <Tab eventKey="tab1">celtics</Tab>
          <Tab eventKey="tab2">henna</Tab>
          <Tab eventKey="tab3">knots</Tab>
          <Tab eventKey="tab4">lotus</Tab>
          <Tab eventKey="tab5">mandala</Tab>
        </TabList>
        <TabPanel>
          <div className='gallery'>
          <div className="image" data-name="celtics"><span><Img src={oimg1} alt=""/></span></div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="henna"><span><Img src={oimg2} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="knots"><span><Img src={oimg3} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="lotus"><span><Img src={oimg4} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="mandala"><span><Img src={oimg5} alt=""/></span></div>
        </div>
        </TabPanel>
      </Tabs>
    </div>
      </>
  )
}

export default Ornamental;