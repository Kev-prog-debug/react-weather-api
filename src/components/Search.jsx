import { useState } from "react";

const Search = ({ getCity }) => {
  const [cityName, setCityName] = useState("");
  //send the cityName to the App.js
  const sendCityName = (e) => {
    e.preventDefault();
    getCity({ cityName });
    setCityName("");
  };
  return (
    <div className="searchbar">
      <form onSubmit={sendCityName}>
        <input
          type="text"
          value={cityName}
          placeholder="Enter your city name.."
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
export default Search;
