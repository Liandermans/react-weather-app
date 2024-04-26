import React from "react";

export default function Form() {
  return (
    <form id="search-form">
      <input
        className="entry-field"
        type="text"
        placeholder="Enter city"
        id="entered-value"
        autoFocus
        autoComplete="off"
      />
      <i
        className="fa-solid fa-location-dot location-icon"
        id="get-location"
      ></i>
      <br />
      <input
        className="submit-button"
        id="submit-button"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
