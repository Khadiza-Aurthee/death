import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/heading";
import ProductList from "./Components/productList";
import { VictoryBar } from "victory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    data: [];
  }

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

componentDidMount = () => {
  console.log(data);
  fetch(
    "https://data.cityofnewyork.us/resource/jb7j-dtam.json?$$app_token=XWazGqXVIUR3iAnjxaHbH7eqV&status=incomplete"
  )
    // convert response to JSON
    .then((response) => response.json())
    .then((data) => {
      // code to execute once data is defined
      // Often you just want to save in state
      this.setState({ data: data });
    })
    .catch((e) => {
      alert(e);
    });
};

export default App;
