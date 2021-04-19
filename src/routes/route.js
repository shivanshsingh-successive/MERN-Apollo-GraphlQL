import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../pages/BookDetails';
import MyCart from '../pages/MyCart';
import Error from '../pages/Error';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AllBooks}>
        <Redirect to="/book" />
    </Route>
    <Route exact path="/book" component={AllBooks} />
    <Route exact path="/book/:id">
      <BookDetails />
    </Route>
    <Route exact path="/cart" component={MyCart} />
    <Route component={Error} />
  </Switch>
);

export default Routes;
