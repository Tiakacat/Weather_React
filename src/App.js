import React from "react";
import "./App.css";
import FormSearch from "./FormSearch";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <FormSearch />
        <CurrentWeather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
