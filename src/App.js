import React from "react";
import "./App.css";
import FormSearch from "./FormSearch";
import Forecast from "./Forecast";
import Footer from "./Footer";
import WeatherNow from "./WeatherNow";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <h1>
          THE WEATHER IS NOW <br />
          <div className="additional">...so the life is...</div>
        </h1>
        <br />
        <FormSearch />
        <div class="row">
          <div class="col-9">
            <img
              src="/images/window.jpeg"
              alt="window view"
              width="580px"
              className="img-fluid border p-1 shadow rounded mw-75 d-none d-sm-block"
            />
          </div>
          <div class="col-3"></div>
        </div>
        <br />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
