import React from "react";
// useContext
import { useGlobal } from "../context";

const ImageText = () => {
  const { weather, formatDate, icon } = useGlobal();

  if (weather) {
    var { current, location } = weather;
  } else {
    var current = "";
    var location = "";
  }

  return (
    <section className="image-txt">
      <h1 className="degree">{current ? current.temp_c : 0}°</h1>

      <div className="info">
        <h1 className="location">{location ? location.name : "_"}</h1>

        <p className="time">{location ? formatDate(location.localtime) : ""}</p>
      </div>

      <div className="icon">
        <img src={icon} alt="Weather data by WeatherAPI.com" border="0" />
      </div>
    </section>
  );
};

export default ImageText;
