import React from 'react';
import { render } from 'react-dom';
import Dashboard from './app/components/dashboard'
import { 
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'
import githubToken from './config'


// TODO: move, clean
const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers.authorization = `Bearer ${githubToken}`
    next()
  }
}])

const client = new ApolloClient({
  networkInterface,
})


render((
  <ApolloProvider client={client}>
    <Dashboard />
  </ApolloProvider>
), document.querySelector('#app'))