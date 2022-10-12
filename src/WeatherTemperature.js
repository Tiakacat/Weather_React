import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.prevent.default();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.prevent.default();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C/ {""}
          <a href="/" onclick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          °C/ {""}
          <a href="/" onclick={showCelsius}>
            °C
          </a>
          {""}/°F
        </span>
      </div>
    );
  }
}
