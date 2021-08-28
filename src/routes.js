import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detalhes from './Pages/Detalhes';
import Editar from './Pages/Editar';
import Home from './Pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:name" exact component={Detalhes} />
      <Route path="/:name/editar" exact component={Editar} />
    </Switch>
  );
}
