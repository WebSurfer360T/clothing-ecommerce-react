import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    hello
  </div>
)

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
