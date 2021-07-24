import React from 'react';
import { Link } from 'react-router-dom';

function Table({ coin }) {
  return (
    <>
      <tr>
        <td>{coin.market_cap_rank}</td>

        <Link to={`/allCrypto/${coin.id}`} style={{ textDecoration: 'none' }}>
          <td>
            <img
              src={coin.image}
              alt="#"
              style={{
                width: '100%',
                maxWidth: '20px'
              }}
            />
            {coin.name}
          </td>
        </Link>

        <td>{coin.current_price}</td>
        <td>
          {coin.price_change_24h < 0 ? (
            <p style={{ color: 'red' }}>{coin.price_change_24h.toFixed(3)}%</p>
          ) : (
            <p style={{ color: 'green' }}>
              {coin.price_change_24h.toFixed(3)}%
            </p>
          )}
        </td>
        <td>{coin.market_cap.toLocaleString()}</td>
        <td>
          {coin.total_volume.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD' // With currency, the currency code is also required
          })}
        </td>
      </tr>
    </>
  );
}

export default Table;
