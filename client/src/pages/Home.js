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
      titleText: "Hello my name is Thomas Player",
      bodyText: `I am a full stack web developer specializing in the MERN stack. I created this website to demonstrate some of the skills and technologies I haved learned.  `

    },
    {
      link: "/portfolio",
      linkText: "Click here to check out some of my web creations",
      key: "B2",
      titleText: "Web Development",
      bodyText: "This website was created with Node.JS, React.JS and many more great technologies.  "

    },
    {
      link: "/graphic-design",
      linkText: "Click here to see some of my graphical design art",
      key: "B3",
      titleText: "Graphic Design",
      bodyText: "I enjoy creating graphics and logos for my websites as well as for merchandise. I like to use open source software such as GIMP, Inkscape and Lunacy.  In addition to creating graphics, I also enjoy photo editing/manipulation. "
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

        <div className="col-sm-3 d-none d-sm-block img-fit">
          <img className="imgStyle" id="logo-middle" src={KeyboardArt}></img>
        </div>
      </div>
      


      <div className="row justify-content-center row-height">
        <div className="col-sm-3 d-none d-sm-block img-fit">
          <img className="imgStyle" id="logo-bottom"src={MouseArt}></img>
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
