import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

import WeatherInfoDisplay from "./components/WeatherInfoDiplay";

import ReducerHook from "./components/ReducerHook";
const App = () => {
  const [city, setCity] = useState("yangon");
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d896edbae39a61362c68bc4466dd9453&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData([...weatherData, data]);
      })
      .catch((error) => console.log(error));
  }, [city]);
  const changeCity = ({ cityName }) => {
    setCity(cityName);
  };
  return (
    <div>
      <Navbar />
      <Search getCity={changeCity} />
      <WeatherInfoDisplay weatherData={weatherData} />
      <ReducerHook />
    </div>
  );
};
export default App;
