import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import About from '../src/Component/plateforme/about.jsx'
import Vision from '../src/Component/plateforme/vision.jsx'
import Jeunesse from '../src/Component/plateforme/jeunesse.jsx'
import Objectifs from '../src/Component/plateforme/objectifs.jsx'
import Organisation from '../src/Component/plateforme/organisation.jsx'
import Chartes from '../src/Component/plateforme/charte.jsx'
import Depute from '../src/Component/plateforme/depute.jsx'
import Elus from '../src/Component/plateforme/elus.jsx'
import Senateurs from '../src/Component/plateforme/senateurs.jsx'
import newsListe from '../src/Component/news/liste.jsx'
import newsCategory from '../src/Component/news/category.jsx'
import newsDetails from '../src/Component/news/details.jsx'
import eventsListe from '../src/Component/events/liste.jsx'
import eventDetails from '../src/Component/events/details.jsx'
import eventInscription from '../src/Component/events/inscription.jsx'
import partiesListe from '../src/Component/parties/liste.jsx'
import detailsParties from '../src/Component/parties/details.jsx'
import membresPartie from '../src/Component/parties/membres.jsx'
import formulaire from '../src/Component/adhesion/formulaire.jsx'
import don from '../src/Component/don/index.jsx'
import informations from '../src/Component/don/informations.jsx'
import paiement from '../src/Component/don/paiement.jsx'
import Home from '../src/Component/plateforme/home.jsx'
import Moments from '../src/Component/engagement/moment.jsx'
import MomentDetails from '../src/Component/engagement/details.jsx'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/plateforme/vision" component={Vision} />
        <Route path="/plateforme/a-propos" component={About} />
        <Route path="/plateforme/objectifs" component={Objectifs} />
        <Route path="/plateforme/jeunesse" component={Jeunesse} />
        <Route path="/plateforme/organisation" component={Organisation} />
        <Route path="/plateforme/charte" component={Chartes} />
        <Route path="/plateforme/deputes" component={Depute} />
        <Route path="/plateforme/elus-locaux" component={Elus} />
        <Route path="/plateforme/senateurs" component={Senateurs} />
        <Route path="/actualites/liste" component={newsListe} />
        <Route path="/actualites/category/:id" component={newsCategory} />
        <Route path="/actualites/:id" component={newsDetails} />
        <Route path="/s-engager/evenements/:id/inscription" component={eventInscription} />
        <Route path="/s-engager/evenements/:id" component={eventDetails} />
        <Route path="/s-engager/evenements" component={eventsListe} />
        <Route path="/s-engager/parties-politiques/:id/membres" component={membresPartie} />
        <Route path="/s-engager/parties-politiques/:id" component={detailsParties} />
        <Route path="/s-engager/parties-politiques" component={partiesListe} />
        <Route path="/grands-moment/:id" component={MomentDetails} />
        <Route path="/grands-moment" component={Moments} />
        <Route path="/adhesion" component={formulaire} />
        <Route path="/don/informations" component={informations} />
        <Route path="/don/paiement" component={paiement} />
        <Route path="/don" component={don} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
