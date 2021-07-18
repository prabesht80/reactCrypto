import React from 'react';
import './styles/Card.css';

function Card({ coin }) {
  return (
    <div className="card-container" key={coin.ath}>
      <span className="firstSpan">
        <img src={coin.image} alt={coin.name} />
      </span>
      <h4>
        {coin.name}/{coin.symbol}
        {coin.price_change_percentage_24h < 0 ? (
          <span className="secondSpan" style={{ background: 'red' }}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        ) : (
          <span className="secondSpan" style={{ background: 'green' }}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        )}
      </h4>
      <p className="firstP">${coin.current_price}</p>
      <p>{coin.market_cap}</p>
    </div>
  );
}

export default Card;
