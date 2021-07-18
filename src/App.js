import React, { useEffect, useState } from 'react';
import Home from './component/pages/Home';
import { Switch, Route } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import AllCrypto from './component/pages/AllCrypto';
import axios from 'axios';

function App() {
  const [coinData, setCoinData] = useState([]);

  const slicedCoin = coinData.slice(0, 4);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      );
      const data = await res.data;
      setCoinData(data);
    };
    fetchData();
  });
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home slicedCoin={slicedCoin} />
          </Route>
          <Route exact path="/allCrypto">
            <AllCrypto coinData={coinData} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
