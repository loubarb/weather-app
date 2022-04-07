import React, { useState } from "react";

const api = {
  key: "aca3d6a6afefbfab909dadcfb8482b59",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=imperial`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const getDate = new Date();
  const currentDate = getDate.toDateString();

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
        </div>
        <div className="location-box">
          <div className="location">NYC, US</div>
          <div className="date">{currentDate}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            45°F
          </div>
          <div className="weather">
            Cloudy
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
