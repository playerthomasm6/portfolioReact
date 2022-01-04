import React, { useState, useEffect } from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Footer from"../components/Footer";
import Header from"../components/Header";
import TextBubble from"../components/TextBubble";
import DigitalClock from"../components/DigitalClock";

import "./style.css";
import BackgroundImg from "../Images/Bg-02.jpg";
import KeyboardImg from "../Images/keyboard-blue-splash.png";


function Home() {

    const welcomeData = [
      {
        link: "/about",
        key: "B1",
        titleText: "Hello my name is Thomas Player",
        bodyText: `I am a full stack web developer specializing in the MERN stack.  I created this website to demonstrate some of the skills I haved learned. ===>`
      },
      {
        link: "/portfolio",
        key: "B2",
        titleText: "Web Development",
        bodyText: "  This site is created using React.JS  ===>"
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
              
              <div className='col-md-2 col-12 d-none d-md-block main-image-container'>
                <img className="img-size" src={KeyboardImg}></img>
              </div>


              {/* Main Info Section */}
              <div className='col-md-10 col-12 main-info'>
                
                 <div className="row flex-row flex-nowrap mt-4 pb-4 scrolling-wrapper">
                      { //Grabs data from welcomeData to display TextBubble component
                      welcomeData.map(section => (<TextBubble 
                        key = {section.key} 
                        titleText = {section.titleText} 
                        bodyText = {section.bodyText} 
                        link = {section.link}/>))
                      }
                    
                </div>

              </div>

            </div>
          </div>

          <section className="row text-box justify-content-center section-padding">
            <div className="col-8 col-md-4 col-lg-3 ">
            <h5>This section will contain a few widgets I have created for now this is recreation of a digital clock.</h5>
                  <DigitalClock/>
            </div>
            
          </section>
        
        <Footer/>
      </div>
    );
  }


export default Home;
