import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GestionUser } from '../views/GestionUser';
import FormPage from '../views/FormPage';
import { Dashboard } from '../views/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/gestion-utilisateur">
          <GestionUser />
        </Route>
        <Route path="/">
          <FormPage />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
