import React from "react";
// useContext
import { useGlobal } from "../context";

const Details = () => {
  const { location, setLocation, getWeather, weather, audio } = useGlobal();

  if (weather) {
    var {
      current,
      forecast: { forecastday },
    } = weather;
  } else {
    var current = "";
    var forecastday = "";
  }

  return (
    <section className="details">
      <form
        className="search"
        onSubmit={(e) => {
          getWeather(e);
          audio.play();
        }}
      >
        <input
          type="text"
          placeholder="Look for another location..."
          value={location}
          onChange={(e) => setLocation(e.currentTarget.value)}
        />

        <button type="submit" className="search-icon">
          <img src="/icons/search.png" alt="search-icon" />
        </button>
      </form>

      <div
        className="history"
        onClick={(e) => {
          if (e.target.dataset.city) {
            getWeather(e, e.target.dataset.city);
          }
        }}
      >
        <p data-city="Hong Kong">Hong Kong</p>
        <p data-city="New York">New York</p>
        <p data-city="London">London</p>
        <p data-city="Paris">Paris</p>
        <p data-city="Tokyo">Tokyo</p>
      </div>

      <div className="weather-details">
        <h1 className="title">Weather Details</h1>

        <span>
          <p>Cloudy</p>
          <p>{current ? current.cloud : "_"}%</p>
        </span>

        <span>
          <p>Humidity</p>
          <p>{current ? current.humidity : "_"}%</p>
        </span>

        <span>
          <p>Wind</p>
          <p>{current ? current.wind_kph : "_"}km/h</p>
        </span>

        <span>
          <p>Rain</p>
          <p>{current ? current.precip_mm : "_"}mm</p>
        </span>
      </div>

      <div className="weather-details next-day">
        <h1 className="title">Next Day</h1>

        <span>
          <p>Temperature</p>
          <p>{forecastday ? forecastday[0].day.avgtemp_c : "_"}°</p>
        </span>

        <span>
          <p>Humidity</p>
          <p>{forecastday ? forecastday[0].day.avghumidity : "_"}%</p>
        </span>

        <span>
          <p>Wind</p>
          <p>{forecastday ? forecastday[0].day.maxwind_kph : "_"}km/h</p>
        </span>

        <span>
          <p>Rain</p>
          <p>{forecastday ? forecastday[0].day.daily_chance_of_rain : "_"}%</p>
        </span>

        <span>
          <p>Snow</p>
          <p>{forecastday ? forecastday[0].day.daily_chance_of_snow : "_"}%</p>
        </span>
      </div>
    </section>
  );
};

export default Details;
