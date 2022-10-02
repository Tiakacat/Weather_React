import React, { useState } from "react";
import axios from "axios";
import "./FormSearch.css";

export default function FormSearch() {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState({});
  let [load, setLoad] = useState(false);

  function showForecast(response) {
    setLoad(true);
    setForecast({
      name: response.data.name,
      temperature_max: response.data.main.temp_max,
      temperature_min: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
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
      <input
        type="search"
        placeholder="Enter a city..."
        autoFocus="on"
        onChange={findCity}
        className="form-control shadow w=100"
      />
      <button
        className="btn btn-outline-info shadow"
        type="submit"
        value="search"
      >
        Let's find!
      </button>
    </form>
  );

  if (load) {
    return (
      <div className="CurrentForecast">
        {form}
        <ul>
          <li>City: {forecast.name}</li>
          <li>
            Temperature:{Math.round(forecast.temperature_max)}°C/
            {Math.round(forecast.temperature_min)}°C
          </li>
          <li>Wind: {forecast.wind} km/h</li>
          <li>Humidity: {forecast.humidity}%</li>
          <li>Description: {forecast.description}</li>
          <li>
            <img src={forecast.icon} alt={forecast.description} />
          </li>
        </ul>
        <div className="WeatherNow">
          <h1>
            THE WEATHER IS NOW <br />
            <div className="additional">...so the life is...</div>
          </h1>
          <br />

          <img
            src="/images/window.jpeg"
            alt="window view"
            width="580px"
            className="main-image"
          />
          <br />

          <div className="dataContainer">
            <div className="myCity">
              <h2>KYIV </h2>
              <h3> 11 September 2022</h3>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="cityData">
                  <h4>
                    <b>TEMP:</b> <br />
                    day/night
                  </h4>
                  <span>{Math.round(forecast.temperature_max)}°C</span>/
                  <span>{Math.round(forecast.temperature_min)}°C/</span>
                  <div className="units">
                    <a href="/">°C</a>
                    <a href="/">°F</a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="cityData">
                  <h4>
                    <b>SKY</b>:<br />
                  </h4>
                  <img src="icons/01d.png" alt="Clear" width="60px" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="cityData">
                  <h4>
                    <b>WIND: </b>
                    <br />
                    11 km/h
                  </h4>
                  <img src="/icons/wind.png" width="60px" alt="wind_icon" />
                </div>
              </div>
              <div className="col-6">
                <div className="cityData">
                  <h4>
                    <b>HUMI: </b>
                    <br /> 11%
                  </h4>
                  <img
                    src="/icons/droplets.png"
                    width="60px"
                    alt="humid_icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
