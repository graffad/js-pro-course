import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { EmojiList } from './emoj';
import { ClickApp } from './Clicker';
import { Navigation } from './Navigation';
import {Weather} from './weather/weather';
import {Home} from './HomePage';

export function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path='/emoji' component={EmojiList}/>
          <Route path='/clicker' component={ClickApp}/>
          <Route path='/weather' component={Weather}/>
          <Route path='/' component={Home}/>
        </Switch>

      </div>
    </Router>

  );
}
