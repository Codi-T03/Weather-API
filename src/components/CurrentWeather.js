import React from "react";
import { render } from "react-dom";
import { Component } from 'react';

import "../App.js";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/partlycloudy.svg";
 
class CurrentWeather extends Component {
    
    render() { 
        return (
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
        );
    }
}
 
export  default CurrentWeather;