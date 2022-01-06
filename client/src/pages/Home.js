import React from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextBubble from "../components/TextBubble";
import DigitalClock from "../components/DigitalClock";
import WeatherPortal from "../components/WeatherPortal";

import "./style.css";
import BackgroundImg from "../Images/Bg-02.jpg";
import KeyboardImg from "../Images/keyboard-blue-splash.png";
import KeyboardTransparent from "../Images/blueKeyboardTransparent.PNG";
import Logo03 from "../Images/Logo-03.png";


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
      <Header />
      <div className="container-fluid row-height">
        

          {/* Main Info Section */}
          

            <div className="row flex-row flex-nowrap scrolling-wrapper scroll-row main-info">
              <div className='col-md-2 col-12  main-image-container'>
                <img className="img-size" src={KeyboardImg}></img>
              </div>


              { //Grabs data from welcomeData to display TextBubble component
                welcomeData.map(section => (<TextBubble
                  key={section.key}
                  titleText={section.titleText}
                  bodyText={section.bodyText}
                  link={section.link} />))
              }

              <div className='col-md-2 col-12 main-image-container'>
                <img className="img-size" src={Logo03}></img>
              </div>

            </div>

          </div>
      

      <section className="row text-box justify-content-center section-padding">
        <div className="col-lg-4 col-12">
          <h4>Here are couple widgets I have made</h4>
        </div>
        
        <div className="col-8 col-md-5 col-lg-3 ">
          <h6>Digital Clock</h6>
          <DigitalClock />
        </div>


      </section>
      {/* <WeatherPortal /> */}



      <Footer />
    </div>
  );
}


export default Home;
