import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
import FormPage from '../views/SignIn2';
import { Dashboard } from '../views/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <FormPage />
        </Route>
      </Switch>
        {/* <Header /> */}
        {/* <FormPage /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
