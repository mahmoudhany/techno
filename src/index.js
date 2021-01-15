import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './context';
import AuthProvider from './context/AuthContext';

ReactDOM.render(
  <ProductProvider>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </ProductProvider>
  ,
  document.getElementById('root')
)
