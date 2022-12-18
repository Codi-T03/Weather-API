import React, { Component } from "react";
import Search from "./components/Search";

//import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
//import MyName from "./components/MyName";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/partlycloudy.svg";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "London"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       <Search></Search>
        <CurrentWeather></CurrentWeather>
      </div>
    );
  }
}

export default App;