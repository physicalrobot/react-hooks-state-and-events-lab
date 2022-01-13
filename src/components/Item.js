import React, { useState } from "react";

function Item({ name, category }) {

  //set state 
  const [incart, setCart] = useState(false);



  //create a click handler
  function handleClick() {

    setCart((incart) => !incart)

  }

  return (
    // set the className to 'in-cart' if incart is true and nothing if incart is false.  
    <li className={incart ? "in-cart" : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={handleClick}
        //change the button class name to remove (if incart is true) or add (if incart is false)
        //if incart is true add the text Remove from if its false add the text Add to
        className={incart ? 'remove' : "add"}>{incart ? 'Remove From' : 'Add to'} Cart</button>
    </li>
  );
}

export default Item;
