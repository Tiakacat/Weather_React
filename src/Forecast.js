import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col-2">
          <div className="card">
            <div className="forecast-date">
              <b>Sunday</b>
            </div>
            {/* <WeatherIcon
              icon={props.info.icon}
              className="card-img-top"
              size={60}
              width={70}
            /> */}
            <div className="forecast-temp">
              <span className="forecast-temp-max">
                <b>18°/</b>
              </span>
              <span className="forecast-temp-min">
                <b>12°</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
