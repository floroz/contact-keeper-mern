import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Alerts />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </>
  );
}

export default App;
