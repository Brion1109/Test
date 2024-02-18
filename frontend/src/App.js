// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import UserRegistrationForm from './components/UserRegistrationForm';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/register">
          <UserRegistrationForm />
        </Route>
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
