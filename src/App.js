import React, { useEffect, useState } from 'react';
import Home from './component/pages/Home';
import { Switch, Route } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import AllCrypto from './component/pages/AllCrypto';
import { Cryptos } from './component/api/cryptos';

function App() {
  const [coinData, setCoinData] = useState([]);

  const slicedCoin = coinData.slice(0, 4);

  useEffect(() => {
    Cryptos().then(setCoinData);
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
