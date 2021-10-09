const WeatherInfo = ({ data }) => {
  return (
    <div className="weatherInfo">
      <div className="details">
        <h2>{data.name}</h2>
        <p>{data.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <h3>Feels like: {Math.floor(data.main.feels_like)} ℃ </h3>

        <h3>Humidity : {data.main.humidity}</h3>
      </div>
    </div>
  );
};
export default WeatherInfo;
