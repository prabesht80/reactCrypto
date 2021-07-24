import React from 'react';

function SingleCryptoTableValue({ coinData }) {
  return (
    <>
      {coinData.map((coin) => (
        <tbody className="tableBody" key={coin.id}>
          <tr>
            <td>
              <img
                src={coin.image}
                alt="#"
                style={{ width: '100%', maxWidth: '30px' }}
              />{' '}
              {coin.name}
            </td>
            <td>${coin.current_price}</td>
            <td>
              {coin.price_change_24h < 0 ? (
                <p className="crypto_percent" style={{ color: 'red' }}>
                  {coin.price_change_24h.toFixed(3)}%
                </p>
              ) : (
                <p className="crypto_percent" style={{ color: 'green' }}>
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
        </tbody>
      ))}
    </>
  );
}

export default SingleCryptoTableValue;
