import React, { useState, useEffect } from "react";
import "./style.css";

import GitHubIcon from "../../Images/icons8-github-60.png";
import LinkedinIcon from "../../Images/icons8-linkedin-50.png";
import TwitterIcon from "../../Images/icons8-twitter-50.png";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DigitalClock(props) {

    const [currentHour, setCurrentHour] = useState();
    const [currentMinute, setCurrentMinute] = useState();
    const [twentyFour, setTwentyFour] = useState();


    useEffect(() => {
        setTwentyFour(false)
    }, [])

    useEffect(() => {
        getCurrentTime();
    }, [currentHour])

    useEffect(() => {
        getCurrentTime();
    }, [currentMinute])

    useEffect(() => {
        getCurrentTime();
    }, [twentyFour])

    const getCurrentTime = () => {
        console.log("getCurrentTime Ran")
        let timerDelay = 3000; // sets the iteration time in miliseconds
        // console.log(twentyFour)
        const t = new Date();
        let hoursRaw = t.getHours();
        const minutesRaw = t.getMinutes();
        let minutes;
        let hours;
        let pm;

        // These statements find if the minutes are single digits and adds 0 to them.
        if (parseInt(minutesRaw) < 10) {minutes = `0${minutesRaw}`} 
        else minutes = minutesRaw;


        if (!twentyFour && hoursRaw > 12) {hours = hoursRaw - 12}
        else if (!twentyFour && hoursRaw === 0) {hours = 12}
        else if (twentyFour && hoursRaw < 10) { hours = `0${hoursRaw}`} 
        else if (twentyFour && hoursRaw === 0 || twentyFour && hoursRaw === 24){hours = `00`} 
        else {hours = hoursRaw}
            

        

        setCurrentHour(hours)
        setCurrentMinute(minutes)

        // console.log("time checked", `${hours}:${minutes}`)

        setTimeout(getCurrentTime, timerDelay)

    }

    const handleTwentyFourClick = (e, trueFalse, callback) => {
        e.preventDefault()
        console.log("clicked")
        setTwentyFour(trueFalse)
        callback()
    }

  return (
    <div className="row clock-case">
        <div className="col-9">
        <h2 className="displayTime">{currentHour}:{currentMinute}</h2>
        </div>
        <div className="col-3">
        <button className="hourButton" type="button" onClick={(e) => {handleTwentyFourClick(e, true, getCurrentTime)}}>24</button>
        <button className="hourButton" type="button" onClick={(e) => {handleTwentyFourClick(e, false, getCurrentTime)}}>12</button>
        </div>
        


    </div>
  );
}

export default DigitalClock;
