import React from "react";
import "./collection.css";
import { Link } from "react-router-dom";
import Img from 'react-bootstrap/Image'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon';
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';
import japaneeseimage from "../images/4.jpg";
import Maoriimage from "../images/8.jpg";
import Ornamentalimg from "../images/5.jpg";
import Polynesianimg from "../images/9.jpg";
import './pages/japaneesetattoo';

function Collection(){
    return(
        <section className="section__container destination__container" id="collectionid">
        <div className="section__header">
          <div>
            <h2 className="section__title">Tattoo Collection</h2>
            <p className="section__subtitle">
              "Ink it with confidence, wear it with pride."
            </p>
          </div>
          <div className="collection_nav">
            <span><ArrowLeftSLineIcon/></span>
            <span><ArrowRightSLineIcon/></span>
          </div>
        </div>
        <div className="collection_grid">
        <Link to="/japaneesetattoo">
          <div className="collection_card">
            <Img src={japaneeseimage} alt="collection" />
            <div className="collection_details">
              <p className="collection_titles">Japaneese</p>
              <p className="collection_subtitles">Ink addict Tattoo</p>
            </div>
          </div>
        </Link>
        <Link to="/maori">
          <div className="collection_card">
            <Img src={Maoriimage} alt="collection" />
            <div className="collection_details">
              <p className="collection_titles">Maori Tattoo</p>
              <p className="collection_subtitles">Ink addict Tattoo</p>
            </div>
          </div>
        </Link>
        <Link to="/ornamental">
          <div className="collection_card">
            <Img src={Ornamentalimg} alt="collection" />
            <div className="collection_details">
              <p className="collection_titles">Ornamental Tattoo</p>
              <p className="collection_subtitles">Ink addict Tattoo</p>
            </div>
          </div>
        </Link>
        <Link to="/polynesian">
          <div className="collection_card">
            <Img src={Polynesianimg} alt="collection" />
            <div className="collection_details">
              <p className="collection_titles">Polynesian Tattoo</p>
              <p className="collection_subtitles">Ink addict Tattoo</p>
            </div>
          </div>
        </Link>
        </div>
      </section>
    );
};

export default Collection;