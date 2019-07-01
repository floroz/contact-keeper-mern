import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactState from './context/contact/ContactState';

ReactDOM.render(
  <ContactState>
    <Router>
      <App />
    </Router>
  </ContactState>,
  document.getElementById('root')
);
