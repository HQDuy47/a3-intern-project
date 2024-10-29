import { gql } from 'graphql-tag'

export const GET_TASKS = gql`
  query {
    tasks {
      ischecked
      assignee
      description
      duedate
      priority
      stage
      team
      title
      type
      id
    }
  }
`
