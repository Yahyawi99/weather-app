import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [stylesVariables, setStylesVariables] = useState({});

  return <AppContext.Provider value={"hi"}>{children}</AppContext.Provider>;
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;

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
