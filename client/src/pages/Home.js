import React, { useState, useEffect } from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Footer from"../components/Footer";
import Header from"../components/Header";
import "./style.css";
import BackgroundImg from "../Images/Bg-02.jpg";

function Home() {

    return (
      <div className="full-view">
        <Header/>
          <div className="container-fluid row-height">
            <div className="row">
              
              <div className='col-sm-3'>
                <h1>Test</h1>
              </div>

              <div className='col-sm-9 main-info'>
                
                <h1>Test</h1>
              </div>

            </div>
          </div>
        
        <Footer/>
      </div>
    );
  }


export default Home;
