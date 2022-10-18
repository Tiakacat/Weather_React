import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleSubmit(response) {}
  setForecastData(response.data.daily);
  setLoaded(true);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2">
            <ForecastDay />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let longtitude = props.lon;
    let latitude = props.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleSubmit);

    return null;
  }
}
