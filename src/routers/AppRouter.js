import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ComponentDashboardPage from '../components/ComponentDashboardPage';
import AddComponent from '../components/AddComponent';
import EditComponent from '../components/EditComponent';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ComponentDashboardPage} exact={true} />
        <Route path="/create" component={AddComponent} />
        <Route path="/edit/:id" component={EditComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
