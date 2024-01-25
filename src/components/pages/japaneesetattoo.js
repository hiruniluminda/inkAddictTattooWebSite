import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import "./japaneesetattoo.css";
import Img from 'react-bootstrap/Image'
import jimg1 from "./images/japanese/dragon.webp";
import jimg3 from "./images/japanese/dragon1.jpg";
import jimg4 from "./images/japanese/dragon2.jpg";
import jimg5 from "./images/japanese/dragon3.jpg";
import jimg6 from "./images/japanese/hannya.jpg";
import jimg7 from "./images/japanese/hannya1.jpg";
import jimg8 from "./images/japanese/koi.jpg";
import jimg9 from "./images/japanese/koi1.jpg";
import jimg10 from "./images/japanese/koi2.png";
import jimg11 from "./images/japanese/oni.jpg";
import jimg12 from "./images/japanese/oni1.jpg";
import jimg13 from "./images/japanese/fu.jpg";
import NavbarPage from "../navBarPage.js";



function Japaneesetattoo() {
  const [key, setKey] = useState('tab2')

  return (
    <>
    <div><NavbarPage/></div>

    <h1 className='headmain'>Japaneese Collection</h1>

    <div className="App">
      <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <TabList id='tabList'>
          <Tab eventKey="tab1">Dragon</Tab>
          <Tab eventKey="tab2">Hannya</Tab>
          <Tab eventKey="tab3">Koi</Tab>
          <Tab eventKey="tab4">Oni</Tab>
          <Tab eventKey="tab5">Fu</Tab>
        </TabList>
        <TabPanel>
          <div className='gallery'>
          <div className="image" data-name="dragon"><span><Img src={jimg1} alt=""/></span></div>
          <div className="image" data-name="dragon"><span><Img src={jimg5} alt=""/></span></div>
          <div className="image" data-name="dragon"><span><Img src={jimg3} alt=""/></span></div>
          <div className="image" data-name="dragon"><span><Img src={jimg4} alt=""/></span></div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="hannya"><span><Img src={jimg7} alt=""/></span></div>
          <div className="image" data-name="hannya"><span><Img src={jimg6} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="koi"><span><Img src={jimg10} alt=""/></span></div>
          <div className="image" data-name="koi"><span><Img src={jimg8} alt=""/></span></div>
          <div className="image" data-name="koi"><span><Img src={jimg9} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="oni"><span><Img src={jimg12} alt=""/></span></div>
          <div className="image" data-name="oni"><span><Img src={jimg11} alt=""/></span></div>
        </div>
        </TabPanel>
        <TabPanel>
        <div className='gallery'>
        <div className="image" data-name="fu"><span><Img src={jimg13} alt=""/></span></div>
        </div>
        </TabPanel>
      </Tabs>
    </div>
      </>
  )
}

export default Japaneesetattoo;