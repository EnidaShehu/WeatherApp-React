import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import './WeatherDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2de0473735f783b7e8ec6706884bff7b`
      );
      setWeatherData(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError('Please type the name correctly.');
    }
  };

  useEffect(() => {
    if (search.trim() === '') {
      setWeatherData(null);
      return;
    }
    fetchWeatherData();
  }, [search]);

  const getWeatherIcon = (description) => {
    const iconMap = {
      'clear sky': 'sun',
      'few clouds': 'cloud-sun',
      'scattered clouds': 'cloud',
      'broken clouds': 'cloud',
      'shower rain': 'cloud-showers-heavy',
      'light rain': 'umbrella',
      'moderate rain': 'cloud-showers-heavy',
      'overcast clouds': 'cloud'
    };

    return iconMap[description] || 'question';  
  };

  return (
    <div className="weather-container">
      <h2>Weather Display</h2>
      <SearchBar setSearch={setSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div className="weather-info">
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp.toFixed(0)}°C</p>
          <p>
            Weather: {weatherData.weather[0].description}&nbsp;
            <FontAwesomeIcon
              icon={getWeatherIcon(weatherData.weather[0].description)}
            />
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherDisplay;
