import { gql } from 'graphql-tag'

export const REGISTER = gql`
  mutation ($userId: String!, $userEmail: String!, $displayName: String!) {
    insert_users(
      objects: [
        {
          id: $userId
          email: $userEmail
          display_name: $displayName
          last_seen: "now()"
        }
      ]
      on_conflict: {
        constraint: users_pkey
        update_columns: [last_seen, email, display_name]
      }
    ) {
      affected_rows
    }
  }
`
