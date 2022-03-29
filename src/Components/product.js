import React from "react";

function Product(props) {
  return (
    <div className="Product">
      <h2>{props.borough}</h2>
      <h2>{props.number}</h2>
    </div>
  );
}

export default Product;
