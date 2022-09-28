import React from "react";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col-2">
          <div className="card">
            <div className="forecast-date">
              <b>Sunday</b>
            </div>
            <img
              src="icons/02d.png"
              width="60px"
              alt=""
              className="card-img-top"
            />
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
