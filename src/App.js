import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import About from '../src/Component/plateforme/about.jsx'
import Organisation from '../src/Component/plateforme/organisation.jsx'
import Depute from '../src/Component/plateforme/depute.jsx'
import Elus from '../src/Component/plateforme/elus.jsx'
import Senateurs from '../src/Component/plateforme/senateurs.jsx'
import newsListe from '../src/Component/news/liste.jsx'
import newsCategory from '../src/Component/news/category.jsx'
import newsDetails from '../src/Component/news/details.jsx'
import Home from '../src/Component/plateforme/home.jsx'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/plateforme/a-propos" component={About} />
        <Route path="/plateforme/organisation" component={Organisation} />
        <Route path="/plateforme/deputes" component={Depute} />
        <Route path="/plateforme/elus-locaux" component={Elus} />
        <Route path="/plateforme/senateurs" component={Senateurs} />
        <Route path="/actualites/liste" component={newsListe} />
        <Route path="/actualites/:id/:name" component={newsCategory} />
        <Route path="/actualites/:id" component={newsDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
