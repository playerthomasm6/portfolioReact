import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


function SectionImageThenText(props) {
  return (
    <div className="row justify-content-center  section-border">
      <div className="col-4 margin-auto" >
      <img src={props.image} id="image1-Home" class="img-thumbnail" alt="Headshot"/>
      </div>

      <div className="col-8 margin-auto">
        <div className="text-area">
          <h3 className="big-bright-text">{props.title}</h3>
          <h5 className="small-bright-text">Hello my name is {props.fullName}</h5>
          <p className="small-bright-text">
            {props.line1}<br/>
            {props.line2} <br/>
             {props.line3} <br/>
             {props.line4}
          </p>
        </div>
      </div>
      
        
    </div>
  );
}

export default SectionImageThenText;
