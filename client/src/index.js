import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider,  createHttpLink } from "@apollo/client";


const client = new ApolloClient({
  uri: 'http://127.0.0.1:4008/',
  name: 'starwars-web-app',
  version: '1.3',
  // uri: 'http://localhost:4004/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
