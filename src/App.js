import React from 'react';
import Home from './component/pages/Home';
import { Switch, Route } from 'react-router-dom';
import Layout from './component/pages/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
