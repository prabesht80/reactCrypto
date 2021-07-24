import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function cart() {
  const cartItem = useSelector((state) => state.cartItems.numOfItem);
  return (
    <div className="cart">
      <FaShoppingCart />
      <h3> {cartItem}</h3>
    </div>
  );
}

export default cart;
