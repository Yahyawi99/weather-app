import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [stylesVariables, setStylesVariables] = useState({});

  const variables = {
    background:
      'url("/images/cloudy/cloudy-weather-small.jpg") bottom/cover repeat',
  };
  const variables1 = {
    background: "linear-gradient(#d4ecfd 0%,#669DC4 50%,#1A5BA9 95%)",
  };
  const variables2 = {
    background:
      "linear-gradient(rgb(7, 6, 7,.75),rgb(7, 6, 7,.9),rgb(7, 6, 7))",
  };

  useEffect(() => {
    setStylesVariables(variables);
  }, []);

  return (
    <AppContext.Provider
      value={{
        stylesVariables,
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

*/

/* 
rainy : 
black :#090F0E
dark-green : #28413E
light-green :#718583
grey: #4F6764
light-grey: #9EA7A6
wheat : #E0E3E3
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
