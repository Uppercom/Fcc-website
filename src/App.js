import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import About from '../src/Component/plateforme/about.jsx'
import Home from '../src/Component/plateforme/home.jsx'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
