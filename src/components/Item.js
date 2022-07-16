import React, { useState } from "react";

function Item({ name, category }) {

  const [addedToCart, setaddedToCart] = useState(false);

  function handleAddToCart() {
    setaddedToCart((addedToCart) => !addedToCart);
  }

  return (
    <li className={addedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addedToCart ? "remove" : "add"} onClick={handleAddToCart}>{addedToCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
