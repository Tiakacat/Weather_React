import React from "react";

import clearDay from "/icons/01d.jpeg";
import clearNight from "/icons/01n.jpeg";
import partlyCloudyDay from "/icons/02d.jpeg";
import partlyCloudyNight from "/icons/02n.jpeg";
import cloudy from "/icons/03d.jpeg";
import overcast from "/icons/03n.jpeg";
import rainDay from "/icons/09d.jpeg";
import rainNight from "/icons/09n.jpeg";
import partlyCloudyDayRain from "/icons/10d.jpeg";
import partlyCloudyNightRain from "/icons/10n.jpeg";
import thunderstormsDay from "/icons/11d.jpeg";
import thunderstormsNight from "/icons/11n.jpeg";
import snowDay from "/icons/13d.jpeg";
import snowNight from "/icons/13n.jpeg";
import mistDay from "/icons/50d.jpeg";
import mistNight from "/icons/50n.jpeg";

export default function WeatherIcon(props) {
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
        src={codeMapping[props.icon]}
        alt={props.description}
        size={props.size}
        width={props.width}
      />
    </div>
  );
}
