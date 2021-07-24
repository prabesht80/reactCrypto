import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions/coinActions';
import './styles/Card.css';

function Card({ coin }) {
  //redux dispatch function
  const dispatch = useDispatch();

  return (
    // Home section cards

    //dispatch function call
    <div
      className="card-container"
      key={coin.ath}
      onClick={() => dispatch(addToCart())}
    >
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
