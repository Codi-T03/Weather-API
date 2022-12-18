import React from "react";

import clear from "../img/weather-icons/clear.svg";
//import "./Search.css";
import "../App.js";

class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
     <header className="app__header" >
            
        {/* {this.state.input} */}
        <input type="text" placeholder="Type in a City Name"/>
            <button className="btn">FIND WEATHER</button>
      </header>

    );
  }
}
export default Search;
