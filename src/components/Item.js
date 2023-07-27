import React from "react";
import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("");
  // console.log(cart);

  const handleClickEvent = () => {
    setCart(cart === "in-cart" ? "" : "in-cart");
  }

  return (
    <li className="">
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button className="add" onClick={handleClickEvent}>{cart === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
    </li>
  );
  }
  export default Item;