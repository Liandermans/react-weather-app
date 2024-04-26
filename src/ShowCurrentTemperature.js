import React from "react";

export default function ShowCurrentTemperature(props) {
  return (
    <div className="col weather-today-col">
      <img
        src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        alt="Weather icon"
        className="weather-icon"
      />
      <div className="temperature-today">{props.value}</div>
      <span className="temp-unit">°C</span>
    </div>
  );
}
