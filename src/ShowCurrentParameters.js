import React from "react";

export default function ShowCurrentParameters(props) {
  return (
    <div className="col">
      <ul>
        <li className="description">{props.description}</li>
        <li className="humidity">Humidity: {props.humidity}%</li>
        <li className="wind-speed">Wind: {props.windSpeed} m/s</li>
      </ul>
    </div>
  );
}
