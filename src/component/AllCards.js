import React from 'react';
import './styles/AllCards.css';
import Card from './Card';
import Cart from './Cart';

function AllCards({ slicedCoin }) {
  return (
    <>
      <Cart />
      <div className="cards-container">
        {slicedCoin.map((coin) => (
          <Card coin={coin} key={coin.ath} />
        ))}
      </div>
    </>
  );
}

export default AllCards;
