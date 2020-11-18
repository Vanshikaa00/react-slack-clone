import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './components/providers/UserProvider';
ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);
