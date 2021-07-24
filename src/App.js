import React, { useEffect, useState } from 'react';
import Home from './component/pages/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import { Cryptos } from './component/api/cryptos';
import Market from './component/pages/Market';
import News from './component/pages/News';
import NewsDetails from './component/pages/NewsDetails';
import { NewsApi } from './component/api/news';
import requests from './component/api/newsRequest';
import CoinDetails from './component/pages/CoinDetails';

function App() {
  // crypto
  const [coinData, setCoinData] = useState([]);

  const slicedCoin = coinData.slice(0, 4);

  useEffect(() => {
    Cryptos().then(setCoinData);
  }, []);

  // news
  const [selectedOption, setSelectedOption] = useState(requests.all);

  const [allNewsData, setAllNewsData] = useState([]);

  const slicedNews = allNewsData.slice(0, 1);
  const slicedNews1 = allNewsData.slice(3, 6);

  useEffect(() => {
    NewsApi(selectedOption).then(setAllNewsData);
  }, [selectedOption]);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home slicedCoin={slicedCoin} />
            </Route>
            <Route exact path="/allCrypto">
              <Market coinData={coinData} />
            </Route>
            <Route exact path="/news">
              <News
                setSelectedOption={setSelectedOption}
                slicedNews={slicedNews}
                slicedNews1={slicedNews1}
              />
            </Route>
            <Route exact path="/news/:newsId">
              <NewsDetails />
            </Route>
            <Route exact path="/allCrypto/:coinId">
              <CoinDetails coinData={coinData} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
