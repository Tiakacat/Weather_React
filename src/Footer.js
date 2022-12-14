import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/Tiakacat/weather_react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>
      &nbsp; by&nbsp;
      <a
        href="https://www.instagram.com/tiakacat/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Kateryna Gulenok</strong>
      </a>
      <br />
      Weather icons by &nbsp;
      <a
        href="https://www.flaticon.com/free-icons/weather"
        title="weather icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        juicy_fish - Flaticon
      </a>
    </div>
  );
}
