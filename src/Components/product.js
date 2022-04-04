import React from "react";

function Product(props) {
  return (
    <div className="Product">
      <h3>{props.borough}</h3>
      <h3>{props.number}</h3>
      <div className="buttons">
        <button>Details</button>
      </div>
    </div>
  );
}

export default Product;
