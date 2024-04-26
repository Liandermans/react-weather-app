import React, { useState } from "react";
import ShowCityDateTime from "./ShowCityDateTime";
import ShowCurrentTemperature from "./ShowCurrentTemperature";
import ShowCurrentParameters from "./ShowCurrentParameters";
import Header from "./Header";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Form() {
  const [city, setCity] = useState(null);
  const [weatherToday, setWeatherToday] = useState(
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

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      setWeatherToday(
        <div className="card weather-today">
          <div className="card-body body-weather-today">
            <div className="row">
              <ShowCurrentTemperature value={20} />
              <ShowCityDateTime city={city} day="Thursday" time="15:59" />
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
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          className="entry-field"
          type="text"
          placeholder="Enter city"
          autoFocus
          autoComplete="off"
          onChange={getCity}
        />
        <i className="fa-solid fa-location-dot location-icon"></i>
        <br />
        <input className="submit-button" type="submit" value="Submit" />
      </form>
      {weatherToday}
      <WeatherForecast />
      <Footer />
    </div>
  );
}
