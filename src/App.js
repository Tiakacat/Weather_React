import React from "react";
import "./App.css";
import FormSearch from "./FormSearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <h1>
          ALL WEATHER IS GREAT <br />
          <div className="additional">...just an attitude...</div>
        </h1>
        <br />

        <FormSearch defaultCity="Kyiv" />

        <br />
        <Footer />
      </div>
    </div>
  );
}
