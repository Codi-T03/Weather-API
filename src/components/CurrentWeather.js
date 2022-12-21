import React, { Component } from "react";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import unknown from "../img/weather-icons/unknown.svg";

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.imgSrc = this.imgSrc.bind(this);
  }

  imgSrc(id) {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id <= 499) {
      return drizzle;
    } else if (id >= 500 && id <= 599) {
      return rain;
    } else if (id >= 600 && id <= 699) {
      return snow;
    } else if (id >= 700 && id <= 799) {
      return fog;
    } else if (id == 800) {
      return clear;
    } else if (id == 801) {
      return partlycloudy;
    } else if (id > 801 && id <= 805) {
      return mostlycloudy;
    } else {
      return unknown;
    }
  }

  render() {
    return this.props.loaded ? (
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={this.imgSrc(this.props.data.list[0].weather[0].id)}
          alt={this.props.data.list[0].weather[0].main.toLowerCase()}
          style={{ width: "300px", height: "auto" }}
        />
        <h2 style={{ color: "white" }}>
          overcast {this.props.data.list[0].weather[0].main.toLowerCase()}
        </h2>
        <div
          className="temp"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h2>Temperature </h2>
          <span style={{ fontSize: "1.5em", padding: "20px" }}>
            {Math.round(this.props.data.list[0].main.temp_min)}&#176; to{" "}
            {Math.round(this.props.data.list[0].main.temp_max)}&#176;C
          </span>
        </div>
        <div
          className="temp"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3>Humidity </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>
            {this.props.data.list[0].main.humidity}%
          </span>
          <h3>Pressure </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>
            {this.props.data.list[0].main.pressure}
          </span>
        </div>
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}
