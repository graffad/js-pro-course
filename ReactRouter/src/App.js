import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { EmojiList } from './emoj';
import { ClickApp } from './Clicker';
import { Navigation } from './Navigation';


export function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path='/emoji' component={EmojiList}/>
          <Route path='/clicker' component={ClickApp}/>
        </Switch>
      </div>
    </Router>

  );
}
