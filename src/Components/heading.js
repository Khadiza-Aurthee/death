import React, { Component } from "react";
import Product from "./product";
import "./heading.css";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

export default class Heading extends Component {
  render() {
    return (
      <>
        <div id="Home" style={{ width: 1160 }}>
          <h1 className="Heading">Deaths by Bourough</h1>{" "}
        </div>
        <div id="Home" style={{ width: 1000 }}>
          <h1 className="Heading1"></h1>{" "}
        </div>
      </>
    );
  }
}
