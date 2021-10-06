import React from "react";
import "./style.css";

function TextBubble(props) {
  return (
    <section className="col-8 content-title-box">
    <a href={props.link}><h1 className="content-title content-title-font">{props.titleText}</h1></a>
    
    <p className="main-text main-text-font">
    {props.bodyText}
    </p>

      </section>
  );
}

export default TextBubble;