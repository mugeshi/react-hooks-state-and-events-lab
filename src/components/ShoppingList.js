import React from "react";
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("Filter by category");

  const handleChangeEvent = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
        <select name="filter" onChange={handleChangeEvent}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          </select>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
        {items.filter((item) => selectedCategory === "Filter by category" || item.category === selectedCategory).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
        );
}
export default ShoppingList;