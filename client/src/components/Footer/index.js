import React from "react";
import "./style.css";

import GitHubIcon from "../../Images/icons8-github-60.png";
import LinkedinIcon from "../../Images/icons8-linkedin-50.png";
import TwitterIcon from "../../Images/icons8-twitter-50.png";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer(props) {
  return (
    <div className="container-fluid footer">
        <div className="row">
            
            <div className="col-sm-4 center">
                <p>Contact</p>
                <p>Site by Thomas M. Player</p>
            </div>
            
            <div className="col-sm-4 center">
                <img src={GitHubIcon}></img>
                <img src={LinkedinIcon}></img>
                <img src={TwitterIcon}></img>
            </div>
            
            <div className="col-sm-4 center">
                <p>Site by Thomas M. Player</p>
                <p>Contact</p>
                <p>Site by Thomas M. Player</p>
            </div>

        </div>
    </div>
  );
}

export default Footer;
