import React from "react";

const ImageText = () => {
  return (
    <section className="image">
      <h1 className="degree">16°</h1>

      <div className="info">
        <h1 className="location">London</h1>

        <p className="time">06:09 - Monday, 9 Sep '19</p>
      </div>

      <div className="icon">
        <img src="icons/cloudy.png" alt="cloudy" />
        <p className="img-description">Cloudy</p>
      </div>
    </section>
  );
};

export default ImageText;
