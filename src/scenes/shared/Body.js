import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Squid from '../Squid';
import Ambapo from '../Ambapo';

export const Body = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/squid" component={Squid} />
      <Route path="/ambapo" component={Ambapo} />
    </Switch>
  </main>
);
