import React from "react";
import "./style.css";
import BackgroundImg from "../../Images/Bg-02.jpg";

function Nav() {
  return (<div styles={{ backgroundImage:`url(${BackgroundImg})` }} >
    <nav id="border-color" className="navbar navbar-expand-lg navbar-dark bg-dark margin-bottom">
    

    <a class="navbar-brand" href="/">Thomas M. Player</a>
  

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav mr-auto">

        <li className="navbar-brand active">
          <a className="nav-link active-page" href="/about">About Me <span class="sr-only">(current)</span></a>
         
        </li>

        <li className="navbar-brand active">
          <a className="nav-link" href="/portfolio">Portfolio<span class="sr-only">(current)</span></a>
          
        </li>

        <li className="navbar-brand active">
          <a className="nav-link" href="/contact">Contact Me<span class="sr-only">(current)</span></a>
          
        </li>

      </ul>
      
    </div>
  </nav>
  </div>
  );
}

export default Nav;
