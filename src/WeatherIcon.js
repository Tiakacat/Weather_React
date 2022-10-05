import React from "react";

import clearDay from "./icons/01d.png";
import clearNight from "./icons/01n.png";
import partlyCloudyDay from "./icons/02d.png";
import partlyCloudyNight from "./icons/02n.png";
import cloudy from "./icons/03d.png";
import overcast from "./icons/03n.png";
import rainDay from "./icons/09d.png";
import rainNight from "./icons/09n.png";
import partlyCloudyDayRain from "./icons/10d.png";
import partlyCloudyNightRain from "./icons/10n.png";
import thunderstormsDay from "./icons/11d.png";
import thunderstormsNight from "./icons/11n.png";
import snowDay from "./icons/13d.png";
import snowNight from "./icons/13n.png";
import mistDay from "./icons/50d.png";
import mistNight from "./icons/50n.png";

export default function WeatherIcon(forecast) {
  const codeMapping = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": partlyCloudyDay,
    "02n": partlyCloudyNight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": overcast,
    "04n": overcast,
    "09d": rainDay,
    "09n": rainNight,
    "10d": partlyCloudyDayRain,
    "10n": partlyCloudyNightRain,
    "11d": thunderstormsDay,
    "11n": thunderstormsNight,
    "13d": snowDay,
    "13n": snowNight,
    "50d": mistDay,
    "50n": mistNight,
  };

  return (
    <div className="WeatherIcon">
      <img
        src={codeMapping[forecast.icon]}
        alt={forecast.description}
        size={forecast.size}
        width={forecast.width}
      />
    </div>
  );
}
