import React, { useState } from "react";
import axios from "axios";
import "./FormSearch.css";
import WeatherNow from "./WeatherNow";
// import WeatherIcon from "./WeatherIcon";

export default function FormSearch(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [forecast, setForecast] = useState({ ready: false });

  function showForecast(response) {
    setForecast({
      ready: true,
      name: response.data.name,
      temperature_max: response.data.main.temp_max,
      temperature_min: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a32c253afedf6c44473c5d983e91967b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);
  }
  function findCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={findCity}
            className="form-control shadow w=100"
          />
        </div>

        <div className="col-3">
          <button
            className="btn btn-outline-info shadow"
            type="submit"
            value="search"
          >
            Let's find!
          </button>
        </div>
      </div>
    </form>
  );

  if (forecast.ready) {
    return (
      <div className="CurrentForecast">
        {form}
        <WeatherNow info={forecast} />
        {/* <ul>
          <li>City: {forecast.name}</li>
          <li>
            Temperature:{Math.round(forecast.temperature_max)}°C/
            {Math.round(forecast.temperature_min)}°C
          </li>
          <li>Wind: {Math.round(forecast.wind)} km/h</li>
          <li>Humidity: {forecast.humidity}%</li>
          <li>Description: {forecast.description}</li>
          <li>
            <WeatherIcon icon={forecast.icon} size={60} width={70} />
          </li>
        </ul> */}
      </div>
    );
  } else {
    return form;
  }
}
