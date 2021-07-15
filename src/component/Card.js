import React from 'react';
import './Card.css';
import { FaBitcoin } from 'react-icons/fa';

function Card() {
  return (
    <div className="card-container">
      <span className="firstSpan">
        <FaBitcoin />
      </span>
      <h4>
        BTC/coin <span className="secondSpan"> +2.3%</span>
      </h4>
      <p className="firstP">$32,452</p>
      <p>34567834</p>
    </div>
  );
}

export default Card;
