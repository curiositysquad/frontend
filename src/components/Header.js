import { useState, useEffect } from 'react';
import { getCurrentLatLng } from '../services/geolocation';
import { getCurWeatherByLatLng } from '../services/weather-api'
import './styles/Header.css'

function Header(props) {

  // ------------ Location Service ------------

  const [appData, setAppData] = useState({
    lat: null,
    lng: null,
    // Add the initializations
    temp: null,
    icon: ''
  });

  async function getAppData() {
    const { lat, lng } = await getCurrentLatLng();
    const weatherData = await getCurWeatherByLatLng(lat, lng);

    setAppData({
      lat,
      lng,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon
    });

  }

  useEffect(() => {
    getAppData();
  }, [])

  // ------------------------------------------


  return (
    <header className="Header">

      {appData.icon &&
        <img
          src={`https://openweathermap.org/img/w/${appData.icon}.png`}
          alt='Current Conditions'
        />
      }
      {appData.temp &&
        <div className="degree">{appData.temp}&deg;</div>
      }

    </header>
  );
}

export default Header;