import React from "react";
import "./productList.css";
import Product from "./product";

function ProductList(props) {
  console.log(props.inventory);
  return (
    <div className="ProductList">
      <Product
        borough={props.inventory[0].borough}
        number={props.inventory[0].number}
      />
      <Product
        borough={props.inventory[1].borough}
        number={props.inventory[1].number}
      />
      <Product
        borough={props.inventory[2].borough}
        number={props.inventory[2].number}
      />
      <Product
        borough={props.inventory[0].borough}
        number={props.inventory[0].number}
      />
      <Product
        borough={props.inventory[0].borough}
        number={props.inventory[0].number}
      />
    </div>
  );
}

export default ProductList;
