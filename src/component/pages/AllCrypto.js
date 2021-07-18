import React from 'react';
import './AllCrypto.css';

function AllCrypto({ coinData }) {
  return (
    <div className="allCrypto">
      <h2 className="allCryptoH2">Crypto World</h2>

      {coinData.map((coin) => (
        <>
          <div className="crypto_container">
            <div className="crypto_row">
              <div className="crypto">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="crypto_image"
                />
                <h1 className="crypto_h1">{coin.name}</h1>
                <p className="crypto_symbol">{coin.symbol}</p>
              </div>
              <div className="crypto_data">
                <p className="crypto_price">${coin.current_price}</p>
                <p className="crypto_total">
                  {coin.total_volume.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD' // With currency, the currency code is also required
                  })}
                </p>
                {coin.price_change_24h < 0 ? (
                  <p className="crypto_percent" style={{ background: 'red' }}>
                    {coin.price_change_24h.toFixed(3)}%
                  </p>
                ) : (
                  <p className="crypto_percent" style={{ background: 'green' }}>
                    {coin.price_change_24h.toFixed(3)}%
                  </p>
                )}
                <p className="crypto_marketcap">
                  mkt cap: {coin.market_cap.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default AllCrypto;
