import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
