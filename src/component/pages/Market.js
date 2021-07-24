import React, { useState } from 'react';
import '../styles/Market.css';
// import Table from 'react-bootstrap/Table';
import Cart from '../Cart';
import Table from '../Table';

function Market({ coinData }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchState, setSearchState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchState(!searchState);
    setSearchQuery(searchValue);
  };

  //[0] means get first element from filter
  var searchResult = coinData.filter((coin) => coin.id === searchQuery, [0]);

  return (
    <>
      <Cart />
      <div className="allCrypto">
        <h2 className="allCryptoH2">Crypto World</h2>

        {/* search container */}
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Price</th>
                <th>% Change</th>
                <th>Market Cap</th>
                <th>Total Volume</th>
              </tr>
            </thead>

            {/* condition rendering searchResult and crypto list */}
            <tbody>
              {searchState ? (
                <>
                  {searchResult.map((coin) => (
                    <>
                      <Table coin={coin} key={coin.id} />
                    </>
                  ))}
                </>
              ) : (
                <>
                  {coinData.map((coin) => (
                    <>
                      <Table coin={coin} key={coin.id} />
                    </>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Market;
