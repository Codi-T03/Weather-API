import React, { Component } from "react";
//import Search from "./components/Search";

//import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
//import MyName from "./components/MyName";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/partlycloudy.svg";
import "./App.css";

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
        <header className="app__header" >
            <input type="text" placeholder="Type in a City Name"/>
            <button className="btn">FIND WEATHER</button>
        </header>
        <main className="app__main" >
        <div className="weather__now">
        <img src={cloudy} className="img__now" />
            <p>Overcast clouds</p>
            <p><span>Temprature</span> 10° to 11°C</p>
            <p><span>Humidity</span> 78% <span>pressure</span> 1008.48</p>
        </div>
        <div className="weather__daily">
        <div>
                    <p>03:00 </p>
                    <img src={cloudy} />
                    <p>8°C</p>
              </div>
              <div>
                    <p>06:00 </p>
                    <img src={cloudy}  />
                    <p>9°C</p>
              </div>
              <div>
                    <p>09:00 </p>
                    <img src={clear}  />
                    <p>14°C</p>
              </div>
              <div>
                    <p>12:00 </p>
                    <img src={clear}  />
                    <p>17°C</p>
              </div>
              <div>
                    <p>15:00 </p>
                    <img src={clear} />
                    <p>18°C</p>
              </div>
              <div>
                    <p>18:00 </p>
                    <img src={clear}  />
                    <p>16°C</p>
              </div>
              <div>
                    <p>21:00 </p>
                    <img src={cloudy}  />
                    <p>13°C</p>
              </div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;