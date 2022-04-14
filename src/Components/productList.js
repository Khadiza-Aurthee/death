import React from "react";
import "./productList.css";
import Product from "./product";

function ProductList(props) {
  console.log(props.inventory);
  return (
    <div className="ProductList">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default ProductList;
