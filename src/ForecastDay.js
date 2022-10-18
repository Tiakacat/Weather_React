import React, { useState } from "react";

export default function ForecastDay {
  return (
    <div className="card">
              <div className="forecast-date">
                {" "}
                {forecastData[0].dt}
                <b>Sunday</b>
              </div>
              <WeatherIcon
                icon={forecastData[0].weather[0].icon}
                className="card-img-top"
                size={60}
                width={70}
              />
              <div className="forecast-temp">
                <span className="forecast-temp-max">
                  <b>{Math.round(ForecastData[0].temp.max)}°</b>
                </span>
                <span className="forecast-temp-min">
                  <b>{Math.round(ForecastData[0].temp.min)}°</b>
                </span>
              </div>
            </div>
  )  
}