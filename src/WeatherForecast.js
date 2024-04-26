import React from "react";
import ShowForecast from "./ShowForecast";

export default function WeatherForecast() {
  return (
    <div className="card weather-forecast">
      <div className="card-body body-weather-forecast">
        <ShowForecast day="Friday" maxTemp={21} minTemp={13} />
        <ShowForecast day="Saturday" maxTemp={17} minTemp={10} />
        <ShowForecast day="Sunday" maxTemp={14} minTemp={8} />
        <ShowForecast day="Monday" maxTemp={10} minTemp={5} />
        <ShowForecast day="Tuesday" maxTemp={11} minTemp={5} />
        <ShowForecast day="Wednesday" maxTemp={10} minTemp={6} />
      </div>
    </div>
  );
}
