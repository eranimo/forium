import React from 'react';
import { render } from "react-dom";
import { App } from './App';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';


console.log('init app');

render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.getElementById('app'))