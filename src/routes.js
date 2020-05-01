import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Login from './pages/login';
import Product from './pages/product';
//const Product = React.lazy(() => import('./pages/product'));
//const Login = React.lazy(() => import('./pages/login'));

const Routes = () => (
  <BrowserRouter>
  <Suspense>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/products/:id" component={Product} />
      <Route path="/login/" component={Login} />
    </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;