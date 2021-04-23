import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PortfolioWindow(props) {
  return (
    
    <article id="portfolio" class="row">

    <div class="col-sm-3">
      <img id="image-border" src={props.image} alt={props.imageAlt} class="img-thumbnail headshot"/>
    </div>

    <div id="portfolio" class="col-sm-9 bg-dark">
      <h3><a href={props.url}>{props.title}</a></h3>
      <p> {props.description}
      </p>
    </div>


  </article>

  
          
  );
}

export default PortfolioWindow;
