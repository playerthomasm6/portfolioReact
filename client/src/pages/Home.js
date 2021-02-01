import React, { useState, useEffect } from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Nav from "../components/Nav";
import Footer from"../components/Footer";
import "./style.css";
import BackgroundImg from "../Images/Bg-02.jpg";

function Home() {

    return (
<div className="bg-dark" styles={{ backgroundImage:`url(${BackgroundImg})` }}>
      <Nav/>
    <main className="container margin-fix">
 
    <section className="row bg-dark">
      

      <article className="col-sm-6 bg-dark"> 
        <picture>  
          <img src={LogoBl} id="width100" alt="TMP Logo" className="img-thumbnail bg-dark"/>
        </picture>
      </article>
      
      <article className="col-sm-6">
        <picure>
          <img src={HeadShot} id="width100" class="img-thumbnail bg-dark" alt="Headshot"/>
        </picure>
      </article>
    </section>
    
    <br/>
    <section class="row"> 

      <article class="col-sm-6">
        <div class="card">

          <div class="card-body">
            <h5 class="card-title">Github Profile</h5>
            <p class="card-text">Use this link to check out all the projects that I have contributed to on Github.</p>
            <a href="https://github.com/playerthomasm6" class="btn btn-primary">Github</a>
          </div>
        </div>
      </article>

      <article class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Linkedin Profile</h5>
            <p class="card-text">Use this link to check out my profile and connect with me on Linkedin
            </p>
            <a href="https://www.linkedin.com/in/thomas-player-18926213b/" class="btn btn-primary">Linkedin</a>
          </div>
        </div>
      </article>

    </section>
  </main>
  <Footer/>
</div>
    );
  }


export default Home;
