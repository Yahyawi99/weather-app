import React, { useContext, useState, useEffect } from "react";
// Axios
import axios from "axios";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [translate, setTranslate] = useState("-50");
  const [stylesVariables, setStylesVariables] = useState({});

  // timer
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  /* ***************************************************************** */
  // Error
  const errorMessage = async (err) => {
    setLocation("");
    setLoading(false);

    await wait(250);

    setErr(true);

    if (err.response.data) {
      setMsg(err.response.data.error.message);
    } else {
      setMsg(err.message);
    }

    setTranslate(50);

    await wait(3000);

    setErr(false);
    setTranslate(-50);
  };

  /* ***************************************************************** */
  // Automatic Weather fetching
  const autoWeather = async () => {
    try {
      setErr(false);
      setLoading(true);

      const response = await axios(
        `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${process.env.REACT_APP_IP_GEOLOCATION_API_KEY}`
      );

      const { city } = response.data.location;

      getWeather(null, city);

      setLoading(false);
    } catch (error) {
      errorMessage(error);
    }
  };

  useEffect(() => {
    autoWeather();
    // eslint-disable-next-line
  }, []);

  /* ***************************************************************** */
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
    const date = new Date(time);

    const hours = date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const weekday = date.toLocaleDateString("en", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleDateString("en", { month: "long" });
    const year = date.toLocaleDateString("en", { year: "2-digit" });

    return `${hours}:${minutes} - ${weekday}, ${day + " " + month} '${year}`;
  };

  const getWeather = async (e, myLocation) => {
    if (e) {
      e.preventDefault();
    }

    if (location || myLocation) {
      try {
        setErr(false);
        setLoading(true);

        const response =
          await axios(`https://api.weatherapi.com/v1/forecast.json?key=${
            process.env.REACT_APP_WEATHER_API_KEY
          }&q=${location ? location : myLocation}&date=${Tomorow()}
`);
        await getWeatherIcon(
          response.data.current,
          response.data.current.is_day
        );

        setWeather(response.data);

        setLocation("");
      } catch (error) {
        errorMessage(error);
      }
    } else {
      console.log("in");
      setMsg("please add a location.");

      setTranslate(50);

      await wait(3000);

      setTranslate(-50);
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

      const { icon } = response.data.find((e) => e.code === code);

      setIconSrc(is_day, icon);
      setBackgrounds(is_day, icon);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  };

  const setIconSrc = (is_day, icon) => {
    if (is_day) {
      setIcon(`/icons/day/${icon}.png`);
    } else {
      setIcon(`/icons/night/${icon}.png`);
    }
  };

  const setBackgrounds = (is_day, icon) => {
    if (is_day) {
      if (icon === 113) {
        setStylesVariables({
          ...stylesVariables,
          background: "linear-gradient(#d4ecfd 0%,#669DC4 50%,#1A5BA9 95%)",
          image_back:
            'url("/images/day/clear.jpg") top center/ cover no-repeat',
          details_back: "linear-gradient(#152c44, rgba(21, 44, 68, 0.25))",
          clr: "#4f8bb9",
        });
      } else if (icon > 113 && icon < 176) {
        setStylesVariables({
          ...stylesVariables,
          background: 'url("/images/day/cloud.jpg") bottom/cover repeat',
          image_back:
            'url("/images/day/cloud.jpg") top center/ cover no-repeat',
          details_back: "",
          clr: "#e2560d",
        });
      } else if ((icon >= 176 && icon <= 284) || (icon >= 311 && icon <= 350)) {
        setStylesVariables({
          ...stylesVariables,
          background: " linear-gradient(#669dc4, #d4ecfd)",
          image_back: 'url("/images/day/snow.jpg") top center/ cover no-repeat',
          details_back: "rgba(21, 44, 68, 0.5)",
          clr: "#d4ecfd",
        });
      } else {
        setStylesVariables({
          ...stylesVariables,
          background:
            "linear-gradient(rgb(7, 6, 7,.75),rgb(7, 6, 7,.9),rgb(7, 6, 7))",
          image_back: 'url("/images/day/rain.jpg") top center/ cover no-repeat',
          details_back:
            "linear-gradient(rgb(40, 65, 62), rgb(40, 65, 62, 0.25))",
          clr: "#4f6764",
        });
      }
    } else {
      if (icon === 113) {
        setStylesVariables({
          ...stylesVariables,
          background:
            "linear-gradient(#152c44 0%,rgb(9, 25, 43) 50%,rgb(0, 0, 0) 95%)",

          image_back:
            'url("/images/night/clear.jpg") top center/ cover no-repeat',
          details_back:
            "linear-gradient(rgb(0, 0, 0), rgba(21, 44, 68, 0.25),#152c44)",
          clr: "#4f8bb9",
        });
      } else if (icon > 113 && icon < 176) {
        setStylesVariables({
          ...stylesVariables,
          background: 'url("/images/night/cloud.jpg") bottom/cover repeat',
          image_back:
            'url("/images/night/cloud.jpg") top center/ cover no-repeat',
          details_back: "",
          clr: "#e2560d",
        });
      } else if ((icon >= 176 && icon <= 284) || (icon >= 311 && icon <= 350)) {
        setStylesVariables({
          ...stylesVariables,
          background: " linear-gradient(#669dc4, #d4ecfd)",
          image_back:
            'url("/images/night/snow.jpg") top center/ cover no-repeat',
          details_back: "rgba(21, 44, 68, 0.5)",
          clr: "#d4ecfd",
        });
      } else {
        setStylesVariables({
          ...stylesVariables,
          background:
            "linear-gradient(rgb(7, 6, 7,.75),rgb(7, 6, 7,.9),rgb(7, 6, 7))",
          image_back:
            'url("/images/night/rain.jpg") top center/ cover no-repeat',
          details_back:
            "linear-gradient(rgb(40, 65, 62), rgb(40, 65, 62, 0.25))",
          clr: "#4f6764",
        });
      }
    }
  };

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
        loading,
        err,
        msg,
        translate,
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
wheat : #d2e4e4

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
