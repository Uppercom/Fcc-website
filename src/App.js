import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import About from '../src/Component/plateforme/about.jsx'
import Organisation from '../src/Component/plateforme/organisation.jsx'
import Depute from '../src/Component/plateforme/depute.jsx'
import Home from '../src/Component/plateforme/home.jsx'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/plateforme/a-propos" component={About} />
        <Route path="/plateforme/organisation" component={Organisation} />
        <Route path="/plateforme/deputes" component={Depute} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
