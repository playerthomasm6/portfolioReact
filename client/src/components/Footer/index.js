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
            
            <div className="col-sm-4 col-12 center">
                <a href="/"><p>Home</p></a>
                <a href="/about"><p>About</p></a>
                <a href="/portfolio"><p>Web Development</p></a>
                <a href="/graphic-design"><p>Graphic Design</p></a>
            </div>
            
            <div className="col-sm-4 col-12 center">
                
                <a href="https://github.com/playerthomasm6"><img className="socialIcons" src={GitHubIcon}></img></a>
                <a href="https://linkedin.com/in/thomas-player-18926213b/"><img className="socialIcons" src={LinkedinIcon}></img></a>
            </div>
            
            <div className="col-sm-4 col-12 
            
            center">
                <p>Site by Thomas M. Player</p>
            </div>

        </div>
    </div>
  );
}

export default Footer;
