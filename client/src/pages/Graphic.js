import React from "react";
import Nav from "../components/Nav";
import "./style.css";
import Footer from"../components/Footer";
import Header from "../components/Header";
import GraphicPortfolio from "../components/GraphicPortfolio";
import PlaceHolder150x150 from "../Images/150x150.png";
import CHF_Logo from "../Images/CHF_Logo.PNG";

function Graphic() {

  return (
  <div className="graphic-style">
   <Header/>
    <div className="container-fluid">
      <div className="row flex-row flex-nowrap mt-4 pb-4 scrolling-x">
        <GraphicPortfolio
        title="Court House Fitness"
        imageSource={CHF_Logo}
        imageAlt="Court House Fitness Logo"
        descriptionText="This logo was designed for Court House Fitness for t-shirts."
        
        />
        <GraphicPortfolio
        title="Court House Fitness"
        imageSource={CHF_Logo}
        imageAlt="Court House Fitness Logo"
        descriptionText="This logo was designed for Court House Fitness for t-shirts."
        />
        <GraphicPortfolio
        title="Court House Fitness"
        imageSource={CHF_Logo}
        imageAlt="Court House Fitness Logo"
        descriptionText="This logo was designed for Court House Fitness for t-shirts."
        />
        <div className="col-sm-3 col-3"></div>
      </div>
    </div>
  <Footer/>
  </div>
  
    );
  }


export default Graphic;
