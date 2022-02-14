import React from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DigitalClock from "../components/DigitalClock";
import WeatherPortal from "../components/WeatherPortal";

import "./style.css";
import "./styleHome.css";
import BackgroundImg from "../Images/Bg-02.jpg";
import KeyboardImg from "../Images/keyboard-blue-splash.png";
import KeyboardTransparent from "../Images/blueKeyboardTransparent.PNG";
import Logo03 from "../Images/Logo-03.png";
import StarBG from "../Images/daniel-leone-g30P1zcOzXo-unsplash.jpg"
import KeyboardArt from "../Images/Keyboard_3D_Transparent.png"
import MouseArt from "../Images/Mouse_transparent.png"

function Home() {

  const welcomeData = [
    {
      link: "/about",
      linkText: "Click here to get to know me more...",
      key: "B1",
      titleText: "Full Service Web Development",
      bodyText: `My name is Thomas Player, I am a passionate web developer/designer, and graphic designer.`

    },
    {
      link: "/portfolio",
      linkText: "Click here to check out some of my websites",
      key: "B2",
      titleText: "Web Development",
      bodyText: "I am a full stack web developer specializing in Node.JS backend/server side code with a React.JS front end. "

    },
    {
      link: "/graphic-design",
      linkText: "Click here to see some of my graphical design art",
      key: "B3",
      titleText: "Graphic Design",
      bodyText: "I enjoy creating graphics and logos for my websites as well as for merchandise. I like to use open source software such as GIMP, Inkscape and Lunacy."
    }
  ]

  const homeBG = { 
      background: `url(${StarBG})`,
      backgroundSize: "cover",
      backgroundAttachement: "fixed"
  }


  return (
    <div className="container-fluid full-view bg-dark">
      <Header />
      <div className="container-box" style={homeBG}>
      
      
      <div className="row justify-content-center row-height">
        <div className="col-sm-3 col-12 img-fit">
          <img className="imgStyle" id="logo-top" src={Logo03}></img>
        </div>

        <div className="col-sm-7 col-12 main-info">
          <h1 className="main-info-title">{welcomeData[0].titleText}</h1>
            <p className="main-info-body">{welcomeData[0].bodyText}<br/>
            <a href={welcomeData[0].link}>{welcomeData[0].linkText}</a></p>
            
        </div>
      </div>


      <div className="row justify-content-center row-height">
        <div className="col-sm-7 main-info">

        <h1 className="main-info-title">{welcomeData[1].titleText}</h1>
            <p className="main-info-body">{welcomeData[1].bodyText}<br/>
            <a href={welcomeData[1].link}>{welcomeData[1].linkText}</a></p>

        </div>

      <div className="col-sm-3 col-12 img-fit">
          <img className="imgStyle" src={KeyboardArt}></img>
        </div>
      </div>
      


      <div className="row justify-content-center row-height">
      <div className="col-sm-3 col-12 img-fit">
          <img className="imgStyle" src={MouseArt}></img>
        </div>

        <div className="col-sm-7 col-12 main-info">
        <h1 className="main-info-title">{welcomeData[2].titleText}</h1>
            <p className="main-info-body">{welcomeData[2].bodyText}<br/>
            <a href={welcomeData[2].link}>{welcomeData[2].linkText}</a></p>
            
        </div>
      </div>



      </div>

      <Footer />


      <section className="row text-box justify-content-center section-padding">
        <div className="col-lg-4 col-12">
          <h4>Here are couple widgets I have made</h4>
        </div>
        
        <div className="col-8 col-md-5 col-lg-3 ">
          <h6>Digital Clock</h6>
          <DigitalClock />
          
        </div>


      </section>
      <WeatherPortal />


      
      
    </div>
  );
}


export default Home;
