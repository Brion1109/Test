// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/">
          <UserDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
