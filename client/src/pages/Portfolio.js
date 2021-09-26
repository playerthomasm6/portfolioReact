import React, {useState, useEffect, useContext} from "react";
import DefaultImage from "../Images/150x150.png"

import Nav from "../components/Nav";
import "./style.css";
import Footer from"../components/Footer";
import PortfolioWindow from "../components/PortfolioWindow";
import Header from "../components/Header";

// IMAGE IMPORTS
import EatDaBurger from "../Images/eat-da-burger.JPG"
import RadicalGames from "../Images/radicalGames.JPG"
import NoteTaker from "../Images/noteTaker.JPG"
import Tipster from "../Images/tipster.JPG"
import BackArrow from "../Images/icons8-back-to-64.png"
import ForwardArrow from "../Images/icons8-next-page-64.png"


function Portfolio(props) {

  const [projectIndex, setprojectIndex] = useState(0) // State for used to set projectData Array current index

  const projectData = [ // Data Array which includes all project data... images, descriptions, titles etc.
    {
      image: EatDaBurger,
      imageAlt: "Screenshot",
      url: "https://calm-anchorage-67744.herokuapp.com/",
      title: "Eat-Da-Burger",
      description: "Eat the burger is a simple app to allow a user to create burger names.  The “burgers” can then be eaten and added to a new list."
    },
    {
      image: RadicalGames,
      imageAlt: "Screenshot",
      url: "https://raticles.herokuapp.com/index.html",
      title: "Radical Gamez",
      description: "Radical Games is a web app which allows a user to search games and add them to a wish list."
    },
    {
      image: NoteTaker,
      imageAlt: "Screenshot",
      url: "https://limitless-reaches-25124.herokuapp.com/notes",
      title: "Note Taker App",
      description: "This app allows a user to create notes and save them to view or edit later."
    },
    {
      image: Tipster,
      imageAlt: "Screenshot",
      url: "https://playerthomasm6.github.io/tipster/",
      title: "Tipster",
      description: "This app allows the user to search any movie or television show and using an algorithm pairs a beer with the movie."
    }
  ]

  const cycleProjectIndex = (value) => { // Controles index cycle for projectData
  if (value === "down" & projectIndex > 0) { //cycle index down for index greater than 0
    setprojectIndex(projectIndex - 1)

  } else if (value === "down" & projectIndex === 0 ) { // cycle index to projectData highest index if === 0
    setprojectIndex(projectData.length -1)
  }

  else if (value === "up" & projectIndex < (projectData.length - 1)) { // cycle index up if index is less than highest index
    setprojectIndex(projectIndex + 1)

  } else if (value === "up" & projectIndex === (projectData.length -1)) { // cycle index to 0 if index is === highest index
    setprojectIndex(0)
  }
}
 
  return (
    <div >
      <Header/>

      <section className="container-fluid">

        <PortfolioWindow
        image = {projectData[projectIndex].image}
        imageAlt = {projectData[projectIndex].imageAlt}
        url = {projectData[projectIndex].url}
        title = {projectData[projectIndex].title}
        description = {projectData[projectIndex].description}
        cycleProjectDown = {() => cycleProjectIndex("down")}
        cycleProjectUp = {() => cycleProjectIndex("up")}
        />

      </section>
  
      <Footer/>
  </div>
    );
  }


export default Portfolio;
