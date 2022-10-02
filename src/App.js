import React from "react";
import "./App.css";
import FormSearch from "./FormSearch";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <FormSearch />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
