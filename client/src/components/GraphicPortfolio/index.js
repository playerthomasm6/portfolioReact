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
            <div className="row flex-row flex-nowrap mt-4 pb-4 scrolling-x">
                <div className="col-sm-5 col-10 d-flex justify-content-center text-center boundry">
                    <div className="image-box">
                        <img src={props.imageSource} alt={props.imageAlt} className="img-thumbnail img-style" style={styles0}></img>
                        
                        <h4 className="title-card">{props.title}</h4>
                        
                        <button className="background-color-button" style={styles1} onClick={() => chooseColor(0)}
                        ></button>
                        <button className="background-color-button" style={styles2}
                        onClick={() => chooseColor(1)}
                        ></button>
                        <button className="background-color-button" style={styles3}
                        onClick={() => chooseColor(2)}
                    ></button>
                    </div>
                    
                </div>
                
                <div className="col-sm-5 col-10 d-flex justify-content-center text-center boundry">
                    <div className="image-box">
                        <img src={props.imageSource} alt={props.imageAlt} className="img-thumbnail img-style" style={styles0}></img>
                        <h4 className="title-card">{props.title}</h4>

                        <button className="background-color-button" style={styles1} onClick={() => chooseColor(0)}
                        ></button>
                        <button className="background-color-button" style={styles2}
                        onClick={() => chooseColor(1)}
                        ></button>
                        <button className="background-color-button" style={styles3}
                        onClick={() => chooseColor(2)}
                    ></button>
                    </div>
                    
                </div>

                <div className="col-sm-5 col-10 d-flex justify-content-center text-center boundry">
                    <div className="image-box">
                        <img src={props.imageSource} alt={props.imageAlt} className="img-thumbnail img-style " style={styles0}></img>
                        <h4 className="title-card">{props.title}</h4>

                        <button className="background-color-button" style={styles1} onClick={() => chooseColor(0)}
                        ></button>
                        <button className="background-color-button" style={styles2}
                        onClick={() => chooseColor(1)}
                        ></button>
                        <button className="background-color-button" style={styles3}
                        onClick={() => chooseColor(2)}
                    ></button>
                    </div>
                    
                </div>
                
            </div>
        
    );
}

export default GraphicPortfolio;
