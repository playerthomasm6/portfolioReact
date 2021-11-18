import React from "react";
import "./style.css";


function Score(props) {
  return (
    <div className="container-fluid footer">
      <h1 id="score">{props.totalScore}</h1>
    </div>
  );
}

export default Score;
