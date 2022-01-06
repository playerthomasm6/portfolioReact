import React from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import FamilyDogs from "../Images/IMG-5747.jpg";
import RemiCooperSmile from "../Images/RemiCooperSmile.JPG";
import SpaceBlue from "../Images/USAMapColorized.PNG";
import Header from "../components/Header";
import "./style.css";


import Footer from "../components/Footer";


function About(props) {

  const aboutStyle = {
    background: `url(${SpaceBlue})`,
    backgroundSize: "200%",
  }

  return (
    <div className="">
      <Header />
      <div className="bg-dark bg-flow" style={aboutStyle}>
        <section className="row section-bg justify-content-center" >



          <picture className="col-sm-3">
            <img src={HeadShot} id="width100" className="img-thumbnail" alt="Headshot" />
          </picture>

          <div className="col-sm-1"></div>

          <article className="col-sm-6 margin-height-auto rounded">
            <div className="row">
              <h3 className="margin-textbox top-margin font-georgia ">Hello! My name is Thomas Player</h3>
              <p className="margin-textbox font font-georgia">
                I am a full stack web developer specializing in React.js front end development.  I have completed a six month full stack web development coding bootcamp at Rutgers University in March 2021.
                <br /><br />

                Some of the skills and technologies I have learned include:

              </p>

            </div>

            <div className="row margin-textbox margin-bottom-textbox justify-content-center">
              <ul className="col-sm-6 col-6 font-georgia ">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript/ES6</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>JQUERY</li>
              </ul>

              <ul className="col-sm-6 col-6 font-georgia ">
                <li>HTML Canvas</li>
                <li>Bootstrap/Materialize</li>
                <li>Mobile Design</li>
                <li>Web Design</li>
                <li>Graphic Design</li>
                <li>Photo Editing</li>
              </ul>
            </div>

          </article>


          <article className="col-sm-6 margin-height-auto rounded">
            <div className="row">
              <h3 className="margin-textbox top-margin font-georgia ">More about me...</h3>
              <p className="margin-textbox font-georgia ">
                In addition to web development I am a self taught graphic designer.  I have learned to use tools such as GIMP, Inkscape nad Lunacy for the creation and design of graphics, photo editing and web design.
                <a href="/graphics" className="font hover-red" style={{color: "white"}}>   Click here to check out some of the graphics I have worked on already.</a>
              </p>
            </div>
          </article>


          <picture className="col-sm-3">
            <img src={RemiCooperSmile} id="width100" className="img-thumbnail" alt="Headshot" />
          </picture>

        </section>

        <section className="row section-bg justify-content-center">

          <picture className="col-sm-3 photo-size">
            <img src={FamilyDogs} className="img-thumbnail bg-dark rounded" alt="Headshot" />
          </picture>

          <article className="col-sm-6 margin-height-auto rounded">
            <h3 className="margin-textbox top-margin font-georgia ">My Family</h3>
            <p className="margin-textbox margin-bottom-textbox font-georgia ">
              My family includes my wife Megan, son Thomas and two dogs Cooper and Remi.  We live in southern New Jersey. 

            </p>
          </article>



        </section>

      </div>

      <Footer />
    </div>
  );
}


export default About;
