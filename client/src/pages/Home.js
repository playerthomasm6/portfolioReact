import React, { useState, useEffect } from "react";
import HeadShot from "../Images/Headshot-01.jpg";
import LogoBl from "../Images/Bl-logo.png";
import Footer from"../components/Footer";
import Header from"../components/Header";
import "./style.css";
import BackgroundImg from "../Images/Bg-02.jpg";
import KeyboardImg from "../Images/keyboard-blue-splash.png";

function Home() {

    return (
      <div className="container-fluid full-view bg-dark">
        <Header/>
          <div className="container-fluid row-height">
            <div className="row r100">
              
              <div className='col-sm-2 col-12 d-none d-sm-block main-image-container'>
                <img className="img-size" src={KeyboardImg}></img>
              </div>

              <div className='col-sm-10 col-12 main-info'>
                
                 <div className="row flex-row flex-nowrap mt-4 pb-4 scrolling-wrapper">

                  <section className="col-8 content-title-box">
                <h1 className="content-title">Web Development</h1>
                <p className="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Obcaecati impedit tenetur beatae! Neque repellendus dicta illo 
                  facere exercitationem voluptas totam nam quia, nemo dolore facilis 
                  obcaecati tempora ipsa itaque nostrum placeat minima at. Ab, at atque. 
                  Maxime nostrum cum debitis sint dolorum optio minus totam est eaque. 
                  Voluptates, adipisci beatae?</p>
                  </section>

                <section className="col-8 content-title-box">
                <h1 className="content-title">Graphic Design</h1>
                <p className="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Obcaecati impedit tenetur beatae! Neque repellendus dicta illo 
                  facere exercitationem voluptas totam nam quia, nemo dolore facilis 
                  obcaecati tempora ipsa itaque nostrum placeat minima at. Ab, at atque. 
                  Maxime nostrum cum debitis sint dolorum optio minus totam est eaque. 
                  Voluptates, adipisci beatae?</p>
                </section>

                </div>

              </div>

            </div>
          </div>
        
        <Footer/>
      </div>
    );
  }


export default Home;
