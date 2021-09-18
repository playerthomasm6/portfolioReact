import React from "react";
import "./style.css";
import Profile from "../../Images/Headshot-01.jpg"

// Main Box
// Profile Picture Container
// Profile Picture
// Profile Picture Text


function Header(props) {
    return (
        <div className="container-fluid header-container">

            <div className="row">

                <div className="col-md-4 col-sm-3 col-12 profile-container">

                    <div className="row">
                        <div className="col-sm-12 set-height">
                            <img src={Profile} id="profile-image-id" className="rounded-circle profile-image" alt=""></img>
                            <h5>Thomas M. Player</h5>
                        </div>



                    </div>

                </div>

                <div className="col-md-8 col-sm-10 col-12 profile-container">

                    <div className="row row-90 d-none d-sm-block">
                        <div className="col-sm-12">
                            
                        </div>
                            

                    </div>

                    <div className="row ">
                        <div className="col-sm-12">
                        <div>

                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item nav-design">
                                    <a className="nav-link" aria-current={"page"} href="/"><h4 className="nav-text">Home</h4></a>
                                </li>
                                <li className="nav-item nav-design">
                                    <a className="nav-link" href="/about"><h4 className="nav-text">About</h4></a>
                                </li>
                                <li className="nav-item nav-design">
                                    <a className="nav-link" href="/portfolio"><h4 className="nav-text">Web Development</h4></a>
                                </li>
                                <li className="nav-item nav-design">
                                    <a className="nav-link" href="/contact"><h4 className="nav-text">Graphic Design</h4></a>
                                </li>
                            </ul>

                        </div>
                        </div>

                        
                    </div>

                </div>








            </div>
            

                
            
        </div>
    );
}

export default Header;
