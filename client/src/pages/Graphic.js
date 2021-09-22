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
  <div className="">
   <Header/>
    <div className="container-fluid">
        <GraphicPortfolio
        title="Court House Fitness"
        imageSource={CHF_Logo}
        imageAlt="Court House Fitness Logo"
        />
        
        
        

    </div>
  <Footer/>
  </div>
    );
  }


export default Graphic;
