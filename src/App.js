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

  findData = () => {
    console.log("CLICKED");
    const list = this.state.data;
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].name);
    }
  };

  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/jb7j-dtam.json?$$app_token=XWazGqXVIUR3iAnjxaHbH7eqV&status=incomplete"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((e) => {
        alert(e);
      });
  };

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
