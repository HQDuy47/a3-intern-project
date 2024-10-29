import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const HASURA_ADMIN_SECRET = 'myadminsecretkey'

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': HASURA_ADMIN_SECRET
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
