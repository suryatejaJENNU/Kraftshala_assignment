import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import IconButton from '@mui/material/IconButton';
import "./index.css"; // Make sure to import your CSS

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 28.12,
    humidity: 34,
    temp: 28.99,
    tempMax: 28.99,
    tempMin: 26.94,
    weather: "smoke",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
      <h2>Weather App</h2>
      <IconButton onClick={toggleDarkMode} style={{ marginBottom: "20px" }}>
        {isDarkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
      </IconButton>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
