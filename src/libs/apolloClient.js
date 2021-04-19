import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

export const CLIENT = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});