import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.info.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="card">
      <div className="forecast-date">{day()}</div>
      <WeatherIcon
        icon={props.info.weather[0].icon}
        className="card-img-top"
        size={60}
        width={70}
      />
      <div className="forecast-temp">
        <span className="forecast-temp-max">
          <b>{Math.round(props.info.temp.max)}°</b>
        </span>
        <span className="forecast-temp-min">
          <b>{Math.round(props.info.temp.min)}°</b>
        </span>
      </div>
    </div>
  );
}
