import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
