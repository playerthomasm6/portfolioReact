import React from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import FamilyDogs from "../Images/Family-Dogs.jpg";
import Nav from "../components/Nav";
import "./style.css";
import Footer from"../components/Footer";


function About(props) {

  return (
    <div className="bg-dark">
<Nav/>
  <section className="row row-margin-fix">

    <div className="col-sm-1"></div>

    <picture className="col-sm-3">
      <img src={HeadShot} id="width100" class="img-thumbnail bg-dark" alt="Headshot"/>
    </picture>

    <div className="col-sm-1"></div>
  
    <article className="col-sm-6 bg-dark margin-height-auto rounded">
          <div className="row">
          <h3 className="margin-textbox top-margin">Hi! My name is Thomas Player</h3>
            <p className="margin-textbox">
              I am an aspiring full stack web developer from South Jersey.
              I worked for almost 10 years in the environmental industry, but when I realized coding combined
              my passions and skills while being able to work with technology, I knew I had to dive into the
              field. With training from the Rutgers University Coding Boot Camp, I am proficient in multiple
              skills and languages including the following:
            </p>
      
      </div>

      <div className="row margin-textbox margin-bottom-textbox">
        <ul className="col-sm-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQUERY</li>
          <li>JSNode</li>
          <li>MYSQL</li>
          <li>Mongo</li>
        </ul>
        
  
      <div className="col-sm-4">
        <ul>
          <li>JS node</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Materilize</li>
          <li>Materilize</li>
        </ul>
      </div>
      </div>
    </article>
    <div class="col-sm-1"></div>
  </section>
<br/>

  <section className="row margin-fix">
    
    <div className="col-sm-1"></div>

    <article className="col-sm-6 bg-dark margin-height-auto rounded">
      <h3 className="margin-textbox top-margin">Get to know me more...</h3>
      <p className="margin-textbox margin-bottom-textbox">
        When I’m not working hard developing, I’m spending time with 
        my wife Megan and two dogs Cooper and Remi or hanging out with my big family 
        which includes six sisters, four brother-in-laws nine nieces and nephews. I enjoy
        playing many musical instruments and playing video games.  My favorite games right now are 
        Rocket League and Apex Legends.
      </p>
    </article>

    <div className="col-sm-1"></div>

    <picture className="col-sm-3 photo-size">
        <img src={FamilyDogs} class="img-thumbnail bg-dark rounded" alt="Headshot"/>
    </picture>
    
    <div className="col-sm-1"></div>
  </section>
<br/><br/><br/><br/>
<Footer/>
</div>
    );
  }


export default About;
