import React, { useContext, useState, useEffect } from "react";
// Axios
import axios from "axios";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(true);
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

    if (err.response.data) {
      setMsg(err.response.data.error.message);
    } else {
      setMsg(err.message);
    }

    setTranslate(50);

    await wait(3000);

    setTranslate(-50);
  };

  /* ***************************************************************** */
  // Automatic Weather fetching IP Adress geolocation API
  const autoWeather = async () => {
    try {
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

      setMsg("Something went wrong please try again");
      setTranslate(50);

      wait(3000);

      setTranslate(-50);
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
