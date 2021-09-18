import React, { useState, useEffect } from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Footer from"../components/Footer";
import Header from"../components/Header";
import "./style.css";
import BackgroundImg from "../Images/Bg-02.jpg";
import KeyboardImg from "../Images/keyboard-blue-splash.png";

function Home() {

    return (
      <div className="full-view">
        <Header/>
          <div className="container-fluid row-height">
            <div className="row r100">
              
              <div className='col-sm-3 col-3 main-image-container'>
                <img className="img-size" src={KeyboardImg}></img>
              </div>

              <div className='col-sm-9 col-9 main-info'>
                
                <h1>Test</h1>
              </div>

            </div>
          </div>
        
        <Footer/>
      </div>
    );
  }


export default Home;
