import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/heading";
import ProductList from "./Components/productList";
import { VictoryBar } from "victory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inventory = [
    { borough: "Bronx", number: 1 },
    { borough: "Manhattan", number: 2 },
    { borough: "Queens", number: 3 },
    { borough: "Brooklyn", number: 4 },
    { borough: "Staten Island", number: 5 }
  ];

  render() {
    return (
      <div className="App">
        <Heading />
        <ProductList inventory={this.inventory} />
        <VictoryBar />
      </div>
    );
  }
}

export default App;
