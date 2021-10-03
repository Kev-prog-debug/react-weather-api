const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
      <h3>{weatherData.main.feels_like}</h3>
      <h3>{weatherData.main.humidity}</h3>
    </div>
  );
};
export default WeatherInfo;
