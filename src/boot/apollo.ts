// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { boot } from 'quasar/wrappers'
// import { auth } from 'src/boot/firebase'

// const createApolloClient = async () => {
//   const token = await auth.currentUser?.getIdToken()
//   return new ApolloClient({
//     uri: 'http://localhost:8080/v1/graphql',
//     cache: new InMemoryCache(),
//     headers: {
//       Authorization: token ? `Bearer ${token}` : ''
//     }
//   })
// }

// const apolloClient = await createApolloClient()

// export default boot(({ app }) => {
//   app.config.globalProperties.$apollo = apolloClient
// })

// export { apolloClient }

// src/boot/apollo.js
import { boot } from 'quasar/wrappers'
// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { provideApolloClient } from '@vue/apollo-composable'
import client from '../apollo-client/client'

// const HASURA_ADMIN_SECRET = 'myadminsecretkey'

// const httpLink = new HttpLink({
//   // uri: 'http://localhost:8080/v1/graphql',
//   uri: 'https://relaxed-gazelle-42.hasura.app/v1/graphql',

//   headers: {
//     'x-hasura-admin-secret': HASURA_ADMIN_SECRET
//   }
// })

export default boot(({ app }) => {
  provideApolloClient(client)
})
