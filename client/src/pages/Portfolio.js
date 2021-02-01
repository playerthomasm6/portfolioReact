import React from "react";
import DefaultImage from "../Images/150x150.png"
import EatDaBurger from "../Images/eat-da-burger.JPG"
import RadicalGames from "../Images/radicalGames.JPG"
import NoteTaker from "../Images/noteTaker.JPG"
import Tipster from "../Images/tipster.JPG"
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
        <img id="image-border" src={EatDaBurger} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="https://calm-anchorage-67744.herokuapp.com/">Eat-Da-Burger</a></h3>
        <p>Eat the burger is a simple app to allow a user to create burger names.  
          The “burgers” can then be eaten and added to a new list.
        </p>
      </div>
    </article>

    <article id="portfolio" class="row">

      <div class="col-sm-2">
        <img id="image-border" src={RadicalGames} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="https://raticles.herokuapp.com/index.html">Radical Gamez</a></h3>
        <p>Radical Games is a web app which allows a user to search games and add them to a wish list.
        </p>
      </div>
    </article>

    <article id="portfolio" class="row">
      <div class="col-sm-2">
        <img id="image-border" src={NoteTaker} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="https://limitless-reaches-25124.herokuapp.com/notes">Note Taker App</a></h3>
        <p>This app allows a user to create notes and save them to view or edit later.
        </p>
      </div>
    </article>

    <article id="portfolio" class="row">
      <div class="col-sm-2">
        <img id="image-border" src={Tipster} alt="Headshot" class="img-thumbnail headshot"/>
      </div>

      <div id="portfolio" class="col-sm-10 bg-dark">
        <h3><a href="https://playerthomasm6.github.io/tipster/">Tipster</a></h3>
        <p>This app allows the user to search any movie or television show and using an algorithm pairs a beer with the movie.
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
