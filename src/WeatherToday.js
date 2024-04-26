import React from "react";
import ShowCurrentTemperature from "./ShowCurrentTemperature";
import ShowCityDateTime from "./ShowCityDateTime";
import ShowCurrentParameters from "./ShowCurrentParameters";

export default function WeatherToday() {
  return (
    <div className="card weather-today">
      <div className="card-body body-weather-today">
        <div className="row">
          <ShowCurrentTemperature value={20} />
          <ShowCityDateTime city="Berlin" day="Thursday" time="15:59" />
          <ShowCurrentParameters
            description="Few clouds"
            humidity={61}
            windSpeed={7}
          />
        </div>
      </div>
    </div>
  );
}
