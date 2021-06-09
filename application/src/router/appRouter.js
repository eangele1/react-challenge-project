import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';
import AuthUserRoute from './authUserRoute';

const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <AuthUserRoute path="/order" exact component={OrderForm} />
      <AuthUserRoute path="/view-orders" exact component={ViewOrders} />
    </Router>
  );
}

export default AppRouter;
