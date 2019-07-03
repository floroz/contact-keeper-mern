import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

ReactDOM.render(
  <ContactState>
    <AuthState>
      <AlertState>
        <Router>
          <App />
        </Router>
      </AlertState>
    </AuthState>
  </ContactState>,
  document.getElementById('root')
);
