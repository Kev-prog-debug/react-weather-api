import WeatherInfo from "./WeatherInfo";
const WeatherInfoDisplay = ({ weatherData }) => {
  return (
    <div className="weatherDisplay">
      {weatherData.map((data, index) => {
        return <WeatherInfo data={data} key={index} />;
      })}
    </div>
  );
};
export default WeatherInfoDisplay;
