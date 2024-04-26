import React from "react";

export default function ShowForecast(props) {
  return (
    <div className="row align-items-center">
      <div className="col-6 day-forecast">{props.day}</div>
      <div className="col-2 icon-forecast">
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt="Weather icon"
          className="weather-icon"
        />
      </div>
      <div className="col-4 temp-forecast">
        <span className="temp-forecast-max">{props.maxTemp}</span> |{" "}
        <span className="temp-forecast-min">{props.minTemp}</span>{" "}
        <span className="degree-forecast">°C</span>
      </div>
    </div>
  );
}
