import React from "react";

import WebSiteScreenShot from "../Images/TP_Developer_ScreenShot.PNG";
import "./style.css";


import Footer from "../components/Footer";


function ScreenShot(props) {

  return (
    <div >
      <img src={WebSiteScreenShot}></img>
    </div>
  );
}


export default ScreenShot;