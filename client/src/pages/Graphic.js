import React from "react";
import "./style.css";
import Footer from"../components/Footer";
import Header from "../components/Header";
import GraphicPortfolio from "../components/GraphicPortfolio";
import PlaceHolder150x150 from "../Images/150x150.png";
import CHF_Logo from "../Images/CHF_Logo.PNG";
import NJS_Logo from "../Images/NJsoldiers_logo.png";
import Northstar_logo from "../Images/Northstar STAR logo version2.png"
import Rocket_Logo_Outline from "../Images/Rocket-OutLine.png"
import Rocket_Logo from "../Images/Rocket-No Line.png"
import CoolHarbor from "../Images/claudio-schwarz-BV7kF5aW7KY-unsplash.jpg"

import KeyboardArt from "../Images/keyboard.png"

function Graphic() {

  const graphicData = [ // Array which holds graphic design data to display
    {
      key: "A1",
      title: "3D Planet Explorer",
      imageSource: Rocket_Logo_Outline,
      imageAlt: "Rocket with outline",
      descriptionText: "This logo graphic was created for the 3D Planet Explorer website I created.  You can find a link to this web site on the Web Development tab."
    },
    {
      key: "A2",
      title: "3D Planet Explorer",
      imageSource: Rocket_Logo,
      imageAlt: "Rocket without outline",
      descriptionText: "This logo graphic was created for the 3D Planet Explorer website I created.  You can find a link to this web site on the Web Development tab."
    },
    {
      key: "A3",
      title: "Northstar Marine Inc",
      imageSource: Northstar_logo,
      imageAlt: "Northstar Marine Inc Logo",
      descriptionText: "This logo was created for Northstar to promote their new safety program.  This logo will be featured on merchandise as well as internally for other safety related material."
    },
    {
      key: "A4",
      title: "Court House Fitness",
      imageSource: CHF_Logo,
      imageAlt: "Court House Fitness Logo",
      descriptionText: "This graphic was designed for t-shirts to be sold by a fitness center called Court House Fitness"
    },
    {
      key: "A5",
      title: "Thomas Player Developer",
      imageSource: KeyboardArt,
      imageAlt: "Thomas Player Developer Keyboard logo",
      descriptionText: "This graphic was designed and created for this portfolio website."
    },
    // {
    //   key: "A6",
    //   title: "PlaceHolder",
    //   imageSource: PlaceHolder150x150,
    //   imageAlt: "Placeholder Image",
    //   descriptionText: "This is placeholder text until I design more graphics professionally"
    // }
  ];

  const photoAuthor = 1;
  const graphicBG = {
    background: `url(${CoolHarbor})`
  }

  return (
  <div className="graphic-style" style={graphicBG}>
   <Header/>
    <div className="container-fluid">
      <div className="row">
          <div className="col-12 title-text">
            <h1>My graphic design portfolio</h1>
          </div>
      </div>
      
      
      <div className="row flex-row flex-nowrap mt-4 pb-4 scrolling-x">
        
        {graphicData.map(item => ( // grabs data from graphicData and displays for each index in array
          <GraphicPortfolio
          key = {item.key}
          title= {item.title}
          imageSource= {item.imageSource}
          imageAlt= {item.imageAlt}
          descriptionText= {item.descriptionText}
        />
        ))}
        
        <div className="col-sm-3 col-3">Photo by <a href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Claudio Schwarz</a> on <a href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </div>
      </div>
    </div>
  <Footer/>
  </div>
  
    );
  }


export default Graphic;
