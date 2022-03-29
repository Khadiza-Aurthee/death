import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/heading";
import ProductList from "./Components/productList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inventory = [
    { borough: "Bronx", number: 1 },
    { borough: "Manhattan", number: 2 },
    { name: "Queens", number: 3 }
  ];

  render() {
    return (
      <div className="App">
        <Heading />
        <ProductList inventory={this.inventory} />
      </div>
    );
  }
}

export default App;
