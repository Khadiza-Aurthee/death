import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/heading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Deaths</h1>
      </div>
    );
  }
}

function TableRow(props) {
  let rowStyle = {
    backgroundColor: "rgb(75, 99, 179)"
  };

  let fontWeightOponent = {
    fontWeight: "normal"
  };
  let fontWeightTeam = {
    fontWeight: "normal"
  };
}

export default App;
