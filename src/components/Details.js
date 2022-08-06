import React from "react";

const Details = () => {
  return (
    <section className="details">
      <form className="search">
        <input type="text" placeholder="Look for another location..." />

        <button type="submit" className="search-icon">
          <img src="/icons/search.png" alt="search-icon" />
        </button>
      </form>

      <div className="history">
        <p>Birmingham</p>
        <p>Manchester</p>
        <p>New York</p>
        <p>California</p>
      </div>

      <div className="weather-details">
        <h1 className="title">Weather Details</h1>

        <span>
          <p>Cloudy</p>
          <p>86%</p>
        </span>

        <span>
          <p>Humidity</p>
          <p>62%</p>
        </span>

        <span>
          <p>Wind</p>
          <p>8km/h</p>
        </span>

        <span>
          <p>Rain</p>
          <p>0mm</p>
        </span>
      </div>

      <div className="weather-details next-day">
        <h1 className="title">Next Day</h1>

        <span>
          <p>Temperature</p>
          <p>27°</p>
        </span>

        <span>
          <p>Cloudy</p>
          <p>86%</p>
        </span>

        <span>
          <p>Humidity</p>
          <p>62%</p>
        </span>

        <span>
          <p>Wind</p>
          <p>8km/h</p>
        </span>

        <span>
          <p>Rain</p>
          <p>0mm</p>
        </span>
      </div>
    </section>
  );
};

export default Details;
