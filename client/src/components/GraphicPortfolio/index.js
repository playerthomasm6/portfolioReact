import React, { useState, useEffect } from "react";
import "./style.css";
import Profile from "../../Images/Headshot-01.jpg"

// Main Box
// Profile Picture Container
// Profile Picture
// Profile Picture Text


function GraphicPortfolio(props) {

const [backgroundColor, setBackgroundColor] = useState(0);

const colorSelectionArr = ["white", "rgba(47, 88, 42, 0.787)", "rgba(0, 140, 255, 0.315)"]; 

const pickedColor = colorSelectionArr[backgroundColor];

const styles0 = {
    backgroundColor: backgroundColor
};

const styles1 = {};

const styles2 = {backgroundColor: "rgba(47, 88, 42, 0.787)"};

const styles3 = {backgroundColor: "rgba(0, 140, 255, 0.315)"};

const chooseColor = (a) => {
    setBackgroundColor(colorSelectionArr[a])
};



    return (
            
                <div className="col-sm-5 col-10 d-flex boundry">
                    
                    
                    <div className="image-container">
                        <img src={props.imageSource} alt={props.imageAlt} className="img-thumbnail img-style" style={styles0}></img>
                        
                        
                        <div className="description-container">
                            <h4 className="title-text">{props.title}</h4>
                            <p>{props.descriptionText}</p>

                        </div>
                        
                    
                    </div>
                </div>
                
    );
}

export default GraphicPortfolio;
