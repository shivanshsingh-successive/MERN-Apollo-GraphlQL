import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { CLIENT } from './libs/apolloClient';
import App from './App';

ReactDOM.render(
  <ApolloProvider client={CLIENT}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);