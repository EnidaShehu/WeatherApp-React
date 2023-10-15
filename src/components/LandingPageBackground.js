import React from "react"
import videobg from "../assets/weather.mp4";
import "./LandingPageBackground.css";

function LandingPageBackground() {
  return (
    <div className="main">
        <video src={videobg} autoPlay loop muted/>
    </div>
  )
}
export default LandingPageBackground