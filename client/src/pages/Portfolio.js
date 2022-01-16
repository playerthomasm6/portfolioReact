import React, {useState, useEffect, useContext, useRef} from "react";
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
import Flashgrid from "../Images/flashgrid_thumbnail.PNG"
import Canvas from"../components/Canvas";
import CanvasGravity from"../components/CanvasGravity";
import PlanetExplorer from "../Images/3dPlanetExplorerThumbnail.PNG"

// React Bootstrap Items
import {ProgressBar} from 'react-bootstrap';


function Portfolio(props) {



  const [projectIndex, setprojectIndex] = useState(0) // State for used to set projectData Array current index

  const projectData = [ // Data Array which includes all project data... images, descriptions, titles etc.
    {
      image: PlanetExplorer,
      imageAlt: "3d Planet Explorer Thumbnail",
      url: "https://planet-explorer-3d.herokuapp.com/",
      title: "3d Planet Explorer",
      description: "A tool in which we can explore the planets of our solar system in 3D.  This uses real images of each planet maps the image on a 3D model using Three.JS"
    },
    {
      image: Flashgrid,
      imageAlt: "Flashgrid Thumbnail",
      url: "https://fathomless-crag-63072.herokuapp.com/",
      title: "Flashgrid",
      description: "Flashgrid is a project management web app.  Create tasks and organize you life.  Flashgrid was my final project for Rutgers coding bootcamp"
    },
    {
      image: EatDaBurger,
      imageAlt: "Screenshot",
      url: "https://calm-anchorage-67744.herokuapp.com/",
      title: "Eat-Da-Burger",
      description: "Eat the burger is a simple app to allow a user to create burger names.  The “burgers” can then be eaten and added to a new list."
    },
    // {
    //   image: RadicalGames,
    //   imageAlt: "Screenshot",
    //   url: "https://raticles.herokuapp.com/index.html",
    //   title: "Radical Gamez",
    //   description: "Radical Games is a web app which allows a user to search games and add them to a wish list."
    // },
    // {
    //   image: NoteTaker,
    //   imageAlt: "Screenshot",
    //   url: "https://limitless-reaches-25124.herokuapp.com/notes",
    //   title: "Note Taker App",
    //   description: "This app allows a user to create notes and save them to view or edit later."
    // },
    // {
    //   image: Tipster,
    //   imageAlt: "Screenshot",
    //   url: "https://playerthomasm6.github.io/tipster/",
    //   title: "Tipster",
    //   description: "This app allows the user to search any movie or television show and using an algorithm pairs a beer with the movie."
    // }
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
 

// let touchstartX = 0
// let touchendX = 0

// const slider = useRef(null)

// function handleGesture() {
//   if (touchendX < touchstartX + 200) {
//     console.log('swiped left!')
//     if (projectIndex < projectData.length - 1)
//     setprojectIndex(projectIndex + 1)
//     touchstartX = 0
//     touchendX = 0
//   }
//   if (touchendX > touchstartX) {
//     console.log(touchendX + " " + touchstartX)
//     console.log(touchendX - touchstartX)
//     if (projectIndex > 0)
//     setprojectIndex(projectIndex - 1)
//     if (projectIndex === 0) {
//       setprojectIndex(projectData.length - 1)
//     }
//     touchstartX = 0
//     touchendX = 0
//   }
// }

// window.addEventListener('touchstart', e => {
//   touchstartX = e.changedTouches[0].screenX
// })

// window.addEventListener('touchend', e => {
//   touchendX = e.changedTouches[0].screenX
//   handleGesture()
// })

  return (
    <div >
      <Header/>

      <section className="container-fluid">

        
      <div>
        <PortfolioWindow
        image = {projectData[projectIndex].image}
        imageAlt = {projectData[projectIndex].imageAlt}
        url = {projectData[projectIndex].url}
        title = {projectData[projectIndex].title}
        description = {projectData[projectIndex].description}
        cycleProjectDown = {() => cycleProjectIndex("down")}
        cycleProjectUp = {() => cycleProjectIndex("up")}
        />
        </div>
      </section>
      {/* <CanvasGravity/> */}

      {/* <section className="row d-flex justify-content-center" id="skills-row">
        <div className="col-sm-3 col-12 skills skill-items">
            <h1 className="">Skills/Experience</h1>
        </div>
        <div className="col-sm-7 col-12 skills">
          <div className="row">
            <div className="col-3">
            <ul className="">
              <li>React.js</li>
              
              <li>HTML5 Canvas</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            </div>
            <div className="col-9">
              <ul>
              <li className="progress-bar-list"><ProgressBar now={70} label={`${70}%`}/></li>
              
              <li className="progress-bar-list"><ProgressBar now={50} label={`${50}%`}/></li>
              <li className="progress-bar-list"><ProgressBar now={70} label={`${70}%`}/></li>
              <li className="progress-bar-list"><ProgressBar now={70} label={`${70}%`}/></li>
              <li className="progress-bar-list"><ProgressBar now={70} label={`${70}%`}/></li>
              </ul>
            
            </div>
          </div>
            
        </div>
      </section> */}
      <Footer/>
  </div>
    );
  }


export default Portfolio;
