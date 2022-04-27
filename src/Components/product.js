import React from "react";

function Product(props) {
  return (
    <div className="Product">
      <h3>{props.borough}</h3>
      <div className="buttons">
        <button
          onClick={() => {
            props.findData();
          }}
        >
          Update Map
        </button>
      </div>
    </div>
  );
}

export default Product;
