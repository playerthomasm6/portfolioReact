import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

import "./style.css";

import GitHubIcon from "../../Images/icons8-github-60.png";
import LinkedinIcon from "../../Images/icons8-linkedin-50.png";
import TwitterIcon from "../../Images/icons8-twitter-50.png";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WeatherPortal(props) {

    const [weatherData, setWeatherData] = useState(null);


    const zipInputRef = useRef();
    const useIconRef = useRef();

    const degreeSymbol = "\u00B0";

    useEffect(() => {
        //getLocalWeather("08330", "US", "8b5240010baf177d08076b9cccba48c3")


    }, [])

    const kelvinToFahrenheit = (temp) => {
        let F = (temp - 273.15) * 9 / 5 + 32
        return (F.toFixed(2) + "\u00B0 F");
    }

    const getWindDirection = (degree) => {
        if (degree >= 340 || degree < 20) return "North"

        else if (degree >= 20 || degree < 70) return "North-East"

        else if (degree >= 70 || degree < 110) return "East"

        else if (degree >= 110 || degree < 150) return "South-East"

        else if (degree >= 150 || degree < 210) return "South"

        else if (degree >= 210 || degree < 250) return "South-West"

        else if (degree >= 250 || degree < 290) return "West"

        else if (degree >= 290 || degree < 340) return "North-West"
    }

    const convertWindSpeedMpsToMph = (speed) => {
        let kph = speed * 2.237
        return kph.toFixed(0)
    }


    const getLocalWeather = (zip, country, API) => {
        localStorage.removeItem("weatherDataLocal");
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${API}`).then((response) => {
            setWeatherData(response.data)
            displayWeather();
        })
    }

    const displayWeather = () => {

        let weatherDataLocal = localStorage.getItem("weatherDataLocal") ? JSON.parse(localStorage.getItem("weatherDataLocal")) : null;

        if (!weatherData && !weatherDataLocal) return

        if (weatherDataLocal != null) {

            let icon = weatherDataLocal.weather[0].icon
            let temperature = kelvinToFahrenheit(weatherDataLocal.main.temp)
            let feelsLike = kelvinToFahrenheit(weatherDataLocal.main.feels_like)
            let windSpeed = convertWindSpeedMpsToMph(weatherDataLocal.wind.speed);
            let windDegree = weatherDataLocal.wind.deg
            let windDirection = getWindDirection(windDegree)
            let iconSrc = `http://openweathermap.org/img/wn/${icon}.png`
            let iconAlt = `${weatherDataLocal.weather[0].description} icon`
            let cityName = weatherDataLocal.name

            return (
                <div className="row weatherBox">
                    <div className="col-4 iconBox">
                        <p>{cityName}</p>
                        <img className="icon" src={iconSrc} alt={iconAlt}></img>
                    </div>
                    <div className="col-8 weatherDescriptionBox">
                        <p>Current Weather: {weatherDataLocal.weather[0].description}</p>

                        <p>Current Temp: {temperature}</p>
                        <p>Feels Like: {feelsLike}</p>
                        <p>Wind: {windSpeed} mph {windDirection}</p>
                    </div>

                </div>


            )
        }
        else {

            localStorage.setItem("weatherDataLocal", JSON.stringify(weatherData))

            let icon = weatherData.weather[0].icon
            let temperature = kelvinToFahrenheit(weatherData.main.temp)
            let feelsLike = kelvinToFahrenheit(weatherData.main.feels_like)
            let windSpeed = convertWindSpeedMpsToMph(weatherData.wind.speed);
            let windDegree = weatherData.wind.deg
            let windDirection = getWindDirection(windDegree)
            let iconSrc = `http://openweathermap.org/img/wn/${icon}.png`
            let iconAlt = `${weatherData.weather[0].description} icon`
            let cityName = weatherData.name




            return (
                <div className="row weatherBox">
                    <div className="col-4 iconBox">
                        <h6>{cityName}</h6>
                        <img src={iconSrc} alt={iconAlt}></img>
                    </div>
                    <div classNmae="col-8 weather descriptionBox">
                        <p>Current Weather: {weatherData.weather[0].description}</p>

                        <p>Temp: {temperature}</p>
                        <p>Feels Like: {feelsLike}</p>
                        <p>Wind Speed: {windSpeed} mph {windDirection}</p>
                    </div>

                </div>


            )
        }

    }



    const handleZipInputEvent = () => {
        let
            characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        if (characters.indexOf(zipInputRef)) {
            console.log("good")
        } else console.log("not so goood")
        console.log(zipInputRef.current.value)
        getLocalWeather(zipInputRef.current.value, "US", "8b5240010baf177d08076b9cccba48c3")
    }

    // if(!weatherData) return null;

    return (
        <div className="row weather-row justify-content-center">
            <div className="col-12 col-sm-12 col-md-6">
                <label for="zip_code">Zip Code&nbsp;&nbsp;</label>
                <input ref={zipInputRef} type="text" defaultValue="10001" name="zip_code" onClick={(e) => {
                    if (zipInputRef.current.value === zipInputRef.current.defaultValue) {
                        zipInputRef.current.value = ""
                    }
                }}></input>

                <button type="button" onClick={() => {

                    handleZipInputEvent()
                }}>Enter</button>

                {displayWeather()}
            </div>




            <div className="col-12 col-sm-12 col-md-4">
                <h1 className="centerWeather">Get your local weather</h1>
            </div>

        </div>
    );
}

export default WeatherPortal;
