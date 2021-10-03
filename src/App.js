import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
const App = () => {
  const [city, setCity] = useState("yangon");
  const [weatherData, setWeatherData] = useState({
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    main: {
      temp: 300.13,
      feels_like: 304.25,
      temp_min: 300.13,
      temp_max: 300.13,
      pressure: 1006,
      humidity: 94,
    },
    wind: {
      speed: 1.54,
      deg: 90,
    },
    name: "Yangon",
  });
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d896edbae39a61362c68bc4466dd9453`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [city]);
  const changeCity = ({ cityName }) => {
    setCity(cityName);
  };
  return (
    <div>
      <Navbar />
      <Search getCity={changeCity} />
      <WeatherInfo weatherData={weatherData} />
    </div>
  );
};
export default App;
