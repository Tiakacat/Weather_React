import React from "react";
import "./App.css";
import FormSearch from "./FormSearch";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <h1>
          THE WEATHER IS NOW <br />
          <div className="additional">...so the life is...</div>
        </h1>
        <br />
        <FormSearch defaultCity="Kyiv" />
        <div class="row">
          <div class="col-7">
            <img
              src="/images/window.jpeg"
              alt="window view"
              width="580px"
              className="img-fluid border p-1 shadow rounded d-none d-sm-block"
            />
          </div>
          <div class="col-5"></div>
        </div>
        <br />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
