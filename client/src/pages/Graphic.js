import React from "react";
import Nav from "../components/Nav";
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
      descriptionText: "This graphic was designed for t-shirts to be sold by Court House Fitness"
    },
    {
      key: "A5",
      title: "New Jersey Soldiers",
      imageSource: NJS_Logo,
      imageAlt: "New Jersey Soldiers logo",
      descriptionText: "This graphic was a reskin and recolor of a previous logo design.  The image was created for the purpose of social media posts and emailing."
    },
    // {
    //   key: "A6",
    //   title: "PlaceHolder",
    //   imageSource: PlaceHolder150x150,
    //   imageAlt: "Placeholder Image",
    //   descriptionText: "This is placeholder text until I design more graphics professionally"
    // }
  ];

  return (
  <div className="graphic-style">
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
        
        <div className="col-sm-3 col-3"></div>
      </div>
    </div>
  <Footer/>
  </div>
  
    );
  }


export default Graphic;
