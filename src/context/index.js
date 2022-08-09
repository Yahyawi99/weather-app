import React, { useContext, useState, useEffect } from "react";
// Axios
import axios from "axios";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [stylesVariables, setStylesVariables] = useState({});

  // eslint-disable-next-line
  const variables_Cloudy = {
    background:
      'url("/images/cloudy/cloudy-weather-small.jpg") bottom/cover repeat',
    image_back:
      'url("/images/cloudy/cloudy-weather-large.jpg") top center/ cover no-repeat',
    details_back: "",
    clr: "e2560d",
  };
  // eslint-disable-next-line
  const variables_Sunny = {
    background: "linear-gradient(#d4ecfd 0%,#669DC4 50%,#1A5BA9 95%)",
    image_back:
      'url("/images/sunny/sunflower large.jpg") top center/ cover no-repeat',
    details_back: "linear-gradient(#152c44, rgba(21, 44, 68, 0.25))",
    clr: "#4f8bb9",
  };
  // eslint-disable-next-line
  const variables_Rainy = {
    background:
      "linear-gradient(rgb(7, 6, 7,.75),rgb(7, 6, 7,.9),rgb(7, 6, 7))",
    image_back:
      'url("/images/rainy/rain-large.jpg") top center/ cover no-repeat',
    details_back: "linear-gradient(rgb(40, 65, 62), rgb(40, 65, 62, 0.25))",
    clr: "#4f6764",
  };

  useEffect(() => {
    setStylesVariables(variables_Cloudy);
    // eslint-disable-next-line
  }, []);

  // *******************************************************************
  // Weather API
  const Tomorow = () => {
    const today = new Date();
    const newTime = today.getTime() + 24 * 3600 * 1000;

    const tomorrow = new Date(newTime);
    const [year, month, day] = [
      tomorrow.getFullYear(),
      tomorrow.getMonth() + 1,
      tomorrow.getDate(),
    ];

    return `${year}-${month}-${day}`;
  };

  const formatDate = (time) => {
    const date = new Date(time * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const weekday = date.toLocaleDateString("en", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleDateString("en", { month: "long" });
    const year = date.toLocaleDateString("en", { year: "2-digit" });

    // 06:09 - Monday, 9 Sep '19
    return `${hours}:${minutes} - ${weekday}, ${day + " " + month} '${year}`;
  };

  const getWeather = async (e) => {
    e.preventDefault();

    if (location) {
      try {
        const response =
          await axios(`https://api.weatherapi.com/v1/forecast.json?key=${
            process.env.REACT_APP_WEATHER_API_KEY
          }&q=${location}&date=${Tomorow()}
`);
        await getWeatherIcon(
          response.data.current,
          response.data.current.is_day
        );

        setWeather(response.data);

        setLocation("");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("please add a location");
    }
  };

  const getWeatherIcon = async (data, is_day) => {
    const {
      condition: { code },
    } = data;

    try {
      const response = await axios(
        "https://www.weatherapi.com/docs/weather_conditions.json"
      );

      const { day, night, icon } = response.data.find((e) => e.code === code);

      setIconSrc(is_day, icon);
      setBackgrounds(is_day, icon);
    } catch (error) {
      console.log(error);
    }
  };

  const setIconSrc = (is_day, icon) => {
    if (is_day) {
      setIcon(`/icons/day/${icon}.png`);
    } else {
      setIcon(`/icons/night/${icon}.png`);
    }
  };

  const setBackgrounds = () => {};

  return (
    <AppContext.Provider
      value={{
        stylesVariables,
        location,
        setLocation,
        getWeather,
        weather,
        formatDate,
        icon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;

/*
sunny:

blue: #1A5BA9
dark-blue : #152C44
light-blue: #4F8BB9
sky-blue: #669DC4
dark-brown : #4B3929
light-brown :#C6AC93
rgb(21, 44, 68)
*/

/* 
rainy : 
black :#090F0E
dark-green : #28413E
light-green :#718583
grey: #4F6764
light-grey: #9EA7A6
wheat : #E0E3E3

rgb(40, 65, 62)
*/

/* 
cloudy : 

dark :#070607
brown : #5C1F0C
grey : #62483B
light-grey:#E7CFBF
ligh-brown : #9E2805
dark-orange : #C83803
orange : #E2560D

*/

/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f9c8902b0msh02f5790163a86ffp1dfc70jsn493133306634',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

*********************************
*********************************
*********************************
*********************************
*********************************
*********************************

#https://api.weatherapi.com/v1/forecast.json?key=73361cf6d6cc40d5a40170046220508&q=casablanca&date=2022-08-06

*/
