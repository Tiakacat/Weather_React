import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
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
              <span>21</span>/<span>15</span>
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
              <img src="/icons/droplets.png" width="60px" alt="humid_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
