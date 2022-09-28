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
      temperature: response.data.main.temp,
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
      />
      <button type="submit" value="search">
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
          <li>Temperature:{Math.round(forecast.temperature)}°C</li>
          <li>Wind: {forecast.wind} km/h</li>
          <li>Humidity: {forecast.humidity}%</li>
          <li>Description: {forecast.description}</li>
          <li>
            <img src={forecast.icon} alt={forecast.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
