import React from "react";
import "./productList.css";
import Product from "./product";

function ProductList(props) {
  console.log(props);
  return (
    <div className="ProductList">
      <Product findData={props.findData} />
      <Product findData={props.findData} />
      <Product findData={props.findData} />
      <Product findData={props.findData} />
      <Product findData={props.findData} />
      <Product findData={props.borough}/>
    </div>
  );
}

export default ProductList;
