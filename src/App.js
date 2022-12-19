import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

import cloudy from "./img/weather-icons/cloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import rain from "./img/weather-icons/rain.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <form>
            <input placeholder="Type in a city name" id="citysearch"></input>
            <button className="find">FIND WEATHER</button>
          </form>
        </header>
        <main className="app__main">
          <div className="weather_today">
            <figure>
              <img src={mostlycloudy} alt="cloudy" width="250" height="250" />
              <h1 className="weather_type">overcast clouds</h1>
            </figure>
            <h1>
              Temperature{" "}
              <span className="weather_data">10&#176; to 11&#176;C</span>
            </h1>
            <hgroup>
              <h2>
                Humidity <span>78%</span>
              </h2>
              <h2>
                pressure <span>1008.48</span>
              </h2>
            </hgroup>
          </div>
          <div className="weather_pertime">
            <h2>03:00</h2>
            <img
              src={mostlycloudy}
              alt="mostlycloudy"
              width="120"
              height="120"
            />
            <h2>8&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>03:00</h2>
            <img
              src={mostlycloudy}
              alt="mostlycloudy"
              width="120"
              height="120"
            />
            <h2>8&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>03:00</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>8&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>03:00</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>8&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>03:00</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>8&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>03:00</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>8&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>03:00</h2>
            <img
              src={mostlycloudy}
              alt="mostlycloudy"
              width="120"
              height="120"
            />
            <h2>8&#176;C</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
