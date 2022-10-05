import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import FormSearch from "./FormSearch";

export default function WeatherNow(props) {
  return (
    <div className="dataContainer">
      <div className="myCity">
        <h2 className="text-uppercase">{forecast.name}</h2>
        <h3>
          <DisplayDate date={props.info.date} />
        </h3>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="cityData">
            <h4>
              <b>TEMP:</b> <br />
              day/night
            </h4>
            <span>
              <FormSearch
                temperature_max={Math.round(forecast.temperature_max)}
              />
            </span>
            /
            <span>
              <FormSearch
                temperature_min={Math.round(forecast.temperature_min)}
              />
            </span>
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
            <WeatherIcon icon={forecast.icon} size={60} width={70} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="cityData">
            <h4>
              <b>WIND: </b>
              <br />
              <FormSearch wind={Math.round(forecast.wind)} />
            </h4>
            <img src="/icons/wind.png" width="60px" alt="wind_icon" />
          </div>
        </div>
        <div className="col-6">
          <div className="cityData">
            <h4>
              <b>HUMI: </b>
              <br />
              <FormSearch humidity={forecast.humidity} />
            </h4>
            <img src="/icons/droplets.png" width="60px" alt="humid_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
