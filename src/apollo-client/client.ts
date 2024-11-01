import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const HASURA_ADMIN_SECRET =
  'EdcCAwK8VW5WbhVT6BbiAXe7WUptIEg2eRKRQ6mo6EUovr4eF5UY6XYIj3e3LxFy'

const httpLink = new HttpLink({
  // uri: 'http://localhost:8080/v1/graphql',
  uri: 'https://relaxed-gazelle-42.hasura.app/v1/graphql',

  headers: {
    'x-hasura-admin-secret': HASURA_ADMIN_SECRET
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
