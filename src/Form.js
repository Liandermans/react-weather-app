import React, { useState } from "react";
import ShowCityDateTime from "./ShowCityDateTime";
import ShowCurrentTemperature from "./ShowCurrentTemperature";
import ShowCurrentParameters from "./ShowCurrentParameters";
import Header from "./Header";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import axios from "axios";

export default function Form() {
  const [city, setCity] = useState(null);
  const [weatherToday, setWeatherToday] = useState(
    <div className="card weather-today">
      <div className="card-body body-weather-today">
        <div className="row">
          <ShowCurrentTemperature
            value={20}
            img="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          />
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
      function getData(response) {
        const temp = Math.round(response.data.temperature.current);
        const description = response.data.condition.description;
        const humidity = response.data.temperature.humidity;
        const wind = Math.round(response.data.wind.speed);

        setWeatherToday(
          <div className="card weather-today">
            <div className="card-body body-weather-today">
              <div className="row">
                <ShowCurrentTemperature
                  value={temp}
                  img={response.data.condition.icon_url}
                />
                <ShowCityDateTime city={city} day="Thursday" time="15:59" />
                <ShowCurrentParameters
                  description={description}
                  humidity={humidity}
                  windSpeed={wind}
                />
              </div>
            </div>
          </div>
        );
      }
      const apiKey = `9fb66eat3c45068of64821d7cabe200f`;
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(getData);
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
