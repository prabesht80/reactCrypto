import React from 'react';
import './styles/AllCards.css';
import Card from './Card';

function AllCards({ slicedCoin }) {
  return (
    <div className="cards-container">
      {slicedCoin.map((coin) => (
        <Card coin={coin} key={coin.ath} />
      ))}
    </div>
  );
}

export default AllCards;
