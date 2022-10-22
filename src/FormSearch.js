import React, { useState } from "react";
import axios from "axios";
import "./FormSearch.css";
import WeatherNow from "./WeatherNow";
import Forecast from "./Forecast";

export default function FormSearch(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [forecast, setForecast] = useState({ ready: false });

  function showForecast(response) {
    console.log(response.data);
    setForecast({
      ready: true,
      coordinates: response.data.coord,
      name: response.data.name,
      country: response.data.sys.country,
      temperature_max: response.data.main.temp_max,
      temperature_min: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2a2eaa51d996796495bf456e5b58adf4";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);
  }
  function findCity(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "2a2eaa51d996796495bf456e5b58adf4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
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
            className="btn btn-outline-danger shadow"
            type="submit"
            value="search"
          >
            Let's find!
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            onClick={getCurrentLocation}
            className="btn buttonLocator btn-outline-light shadow"
          >
            Current{" "}
            <img src="/images/locator.png" width="15px" alt="locator_icon" />
          </button>
        </div>
      </div>
    </form>
  );

  if (forecast.ready) {
    return (
      <div className="CurrentForecast">
        {form}
        <div className="d-flex">
          <img
            src="/images/weather.jpg"
            alt="no bad weather"
            width="580px"
            className="img-fluid border p-1 mt-5 shadow rounded d-none d-sm-block"
          />
          <WeatherNow info={forecast} />
        </div>
        <Forecast coordinates={forecast.coordinates} />
      </div>
    );
  } else {
    handleSubmit({ preventDefault: function() {} });

    return form;
  }
}
