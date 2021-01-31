import React from "react";
import DefaultImage from "../Images/150x150.png"
import Nav from "../components/Nav";
import "./style.css";
import Footer from"../components/Footer";


function Portfolio(props) {
 
  return (
    <div className="bg-dark">
      <Nav/>
    <section class="container">
    
    <article id="portfolio" class="row">
      
      <div class="col-sm-2">
        <img id="image-border" src={DefaultImage} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="http://google.com">Project #1</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic porro a adipisci
          ipsa corporis omnis, animi excepturi nam, vero ullam architecto provident nisi fugiat
          eum voluptatum quaerat voluptatibus laboriosam.
        </p>
      </div>
    </article>

    <article id="portfolio" class="row">

      <div class="col-sm-2">
        <img id="image-border" src={DefaultImage} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="http://google.com">Project #2</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic porro a adipisci
          ipsa corporis omnis, animi excepturi nam, vero ullam architecto provident nisi fugiat
          eum voluptatum quaerat voluptatibus laboriosam.
        </p>
      </div>
    </article>

    <article id="portfolio" class="row">
      <div class="col-sm-2">
        <img id="image-border" src={DefaultImage} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="http://google.com">Project #3</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic porro a adipisci
          ipsa corporis omnis, animi excepturi nam, vero ullam architecto provident nisi fugiat
          eum voluptatum quaerat voluptatibus laboriosam.
        </p>
      </div>
    </article>

    <article id="portfolio" class="row">
      <div class="col-sm-2">
        <img id="image-border" src={DefaultImage} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="http://google.com">Project #4</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic porro a adipisci
          ipsa corporis omnis, animi excepturi nam, vero ullam architecto provident nisi fugiat
          eum voluptatum quaerat voluptatibus laboriosam.
        </p>
      </div>
    </article>
  </section>
  <br/><br/><br/><br/>
  <Footer/>
  </div>
    );
  }


export default Portfolio;
