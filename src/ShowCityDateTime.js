import React from "react";

export default function ShowCityDateTime(props) {
  return (
    <div className="col">
      <ul>
        <li className="city">{props.city}</li>
        <li className="date-time">
          {props.day}, {props.time}
        </li>
      </ul>
    </div>
  );
}
