import React, { useState, useEffect } from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Footer from"../components/Footer";
import Header from"../components/Header";
import TextBubble from"../components/TextBubble";

import "./style.css";
import BackgroundImg from "../Images/Bg-02.jpg";
import KeyboardImg from "../Images/keyboard-blue-splash.png";


function Home() {

    const welcomeData = [
      {
        link: "/about",
        key: "B1",
        titleText: "Hello my name is Thomas Player",
        bodyText: "I am a full stack web developer specializing in the MERN stack.  I created this website to demonstrate some of the skills I haved learned. ===>"
      },
      {
        link: "/portfolio",
        key: "B2",
        titleText: "Web Development",
        bodyText: "I can code websites better than I can write sentences describing it.  So far my professional experience is limited, however I have made a few projects that demonstrate some of the skills I have learned that I would love for you to check out.  This site is created using React.JS  ===>"
      },
      {
        link: "/graphic-design",
        key: "B3",
        titleText: "Graphic Design",
        bodyText: "No front end web developer would be complete without some graphic design skills.  You can check out some of the graphics I have created."
      }
    ]

    return (
      <div className="container-fluid full-view bg-dark">
        <Header/>
          <div className="container-fluid row-height">
            <div className="row r100">
              
              <div className='col-sm-2 col-12 d-none d-sm-block main-image-container'>
                <img className="img-size" src={KeyboardImg}></img>
              </div>

              <div className='col-sm-10 col-12 main-info'>
                
                 <div className="row flex-row flex-nowrap mt-4 pb-4 scrolling-wrapper">
                      
                    
                      { //Grabs data from welcomeData to display TextBubble component
                      welcomeData.map(section => (<TextBubble key = {section.key} titleText = {section.titleText} bodyText = {section.bodyText} link = {section.link}/>))
                      }
                    
                </div>

              </div>

            </div>
          </div>
        
        <Footer/>
      </div>
    );
  }


export default Home;
