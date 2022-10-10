import React from "react";
import "./App.css";
import FormSearch from "./FormSearch";
import Forecast from "./Forecast";
import Footer from "./Footer";
import DisplayDate from "./DisplayDate";
import WeatherNow from "./WeatherNow";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <FormSearch />
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
          <FormSearch />
          <WeatherNow />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
