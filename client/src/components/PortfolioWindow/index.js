import React from "react";
import "./style.css";

import BackArrow from "../../Images/icons8-back-to-64.png"
import ForwardArrow from "../../Images/icons8-next-page-64.png"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PortfolioWindow(props) {
  return (
    <div>
      <article className="row row-style d-flex justify-content-center text-center">
        
        
        <div className="col-sm-2 col-2 arrow-button-box">
          <img
            className="arrow-button"
            src={BackArrow}
            onClick={props.cycleProjectDown}
          />
        </div>

        <div className="col-sm-7 col-8 image-box-style">
          <a href={props.url} target="_blank" rel="noreferrer noopener"><img src={props.image} alt={props.imageAlt} className="image-style" /></a>
        </div>


        <div className="col-sm-2 col-2 arrow-button-box">
          <img
            className="arrow-button"
            src={ForwardArrow}
            onClick={props.cycleProjectUp}
          />

        </div>

      </article>

      <div className="row description-box-row">
        <div className="col-sm-5 col-10 description-box">
          <h5><a href={props.url}>{props.title}</a></h5>
          <p> {props.description}
          </p>
        </div>
      </div>

    </div>

  );
}

export default PortfolioWindow;
