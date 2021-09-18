import React from "react";
import "./style.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer(props) {
  return (
    <div className="container-fluid footer">
        <div className="row">
            <div className="col-sm-12 center">
                <p>Site by Thomas M. Player</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
