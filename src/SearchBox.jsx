import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "9b4fd5f3a1022f0cf405e724b842a2f3";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getWeatherInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse.message || "Failed to fetch data");
      }

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      setError("No such place exists in our API");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); // Clear input after successful submission
      setError(false);
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleInputChange}
        />
        <br /><br />
        <Button variant="contained" type="submit" disabled={!city || loading}>
          {loading ? 'Loading...' : 'Send'}
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default SearchBox;
