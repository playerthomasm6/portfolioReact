import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

import "./style.css";

import GitHubIcon from "../../Images/icons8-github-60.png";
import LinkedinIcon from "../../Images/icons8-linkedin-50.png";
import TwitterIcon from "../../Images/icons8-twitter-50.png";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WeatherPortal(props) {

    const [weatherData, setWeatherData] = useState (null);

    useEffect(() => {
         //getLocalWeather("08330", "US", "8b5240010baf177d08076b9cccba48c3")

        
    },[])

    const kelvinToFahrenheit = (temp) => {
        let F = (temp - 273.15) * 9/5 + 32
        return (F.toFixed(2) + "\u00B0 F");
    }
    

    

    const getLocalWeather = (zip, country, API) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${API}`).then((response) => {
            setWeatherData(response.data)
            displayWeather();
        })
    }

    const displayWeather = () => {
        
        if (!weatherData) return
        
        else{
        return (
            <div>
                <p>{weatherData.weather[0].main}</p>
                <p>{weatherData.weather[0].description}</p>
                <p>{weatherData.weather[0].id}</p>
                <p>{kelvinToFahrenheit(weatherData.main.temp)}</p>
                <p>{weatherData.main.feels_like}</p>
                <p>{weatherData.weather[0].main}</p>
                <p>{weatherData.weather[0].main}</p>
            </div>
        

        )}
        
    }

    const zipInputRef = useRef();

    const handleZipInputEvent = () => {
        let 
        characters = ["1","2","3","4","5","6","7","8","9","0"];
        if (characters.indexOf(zipInputRef)) {
            console.log("good")
        } else console.log("not so goood")
        console.log(zipInputRef.current.value)
        getLocalWeather(zipInputRef.current.value, "US", "8b5240010baf177d08076b9cccba48c3")
    }

    // if(!weatherData) return null;

  return (
    <div className="row weather-row justify-content-center">
        <div className="col-11 col-sm-5">
            <label for="zip_code">Zip Code&nbsp;&nbsp;</label>
        <input ref={zipInputRef} type="text" defaultValue="10001" name="zip_code" onClick={(e) => {
            if (zipInputRef.current.value === zipInputRef.current.defaultValue) {
                zipInputRef.current.value = ""
            }
        }}></input>
        
        <button type="button" onClick={() => {
            
            handleZipInputEvent()
        }}>Get My Weather</button>

        {displayWeather()}
        </div>
        

        

        <div className="col-11 col-sm-5">
        <h1>why is nothing displaying</h1>
        </div>

    </div>
  );
}

export default WeatherPortal;
