export const GET_TOTAL_TASKS = `
query GetTasks {
 tasks_aggregate {
      aggregate {
        count
      }
    }
}
    
`

export const ADD_TASK = `
mutation InsertTasks($assignee: String, $description: String, $duedate: date, $priority: String, $stage: String, $title: String, $type: String) {
  insert_tasks(objects: {assignee:$assignee, description: $description, duedate: $duedate,  priority: $priority, stage: $stage, title: $title, type: $type}) {
    affected_rows
    returning {
      id
      title
      description
      type
      duedate
      stage
      priority
      assignee
      ischecked
    }
  }
}
`

export const UPDATE_TASK_DUEDATE_STAGE = `
mutation UpdateTaskDuedateStage( $id: String, $duedate: date, $stage: String) {
  update_tasks(where: {id: {_eq: $id }}, _set: {duedate: $duedate, stage: $stage}) {
    affected_rows
    returning {
      id
      duedate
      stage
    }
  }
}
`

export const UPDATE_TASK_ISCHECKED = `
mutation UpdateTaskIsChecked($id: String, $ischecked: Boolean!) {
  update_tasks(where: {id: {_eq: $id}}, _set: {ischecked: $ischecked}) {
    affected_rows
    returning {
      ischecked
    }
  }
}
`
export const DELETE_TASK = `
mutation DeleteTaskById($id: String) {
  delete_tasks(where: { id: { _eq: $id } }) {
    affected_rows
  }
}
`

export const GET_TASKS = `
 query GetTasks($limit: Int, $offset: Int, $searchTerm: String) {
    tasks(
      limit: $limit, 
      offset: $offset, 
      where: {
        _or: [
          { title: { _ilike: $searchTerm } },
        ]
      }
    ) {
      id
      title
      description
      type
      duedate
      stage
      priority
      assignee
      ischecked
    }
  }
`

export const GET_SORTED_TASK = `
  query GetTasks($limit: Int, $offset: Int, $searchTerm: String, $orderBy: [tasks_order_by!]) {
    tasks(
     
      where: {
        _or: [
          { title: { _ilike: $searchTerm } },
        ]
      },
      order_by: $orderBy
      limit: $limit, 
      offset: $offset, 
    ) {
      id
      title
      description
      type
      duedate
      stage
      priority
      assignee
      ischecked
    }
  }
`

export const GET_SEARCH_SUGGESTIONS = `
query GetSearchSuggestions($searchTerm: String) {
  tasks(where: { title: { _ilike: $searchTerm } }, limit: 5) {
    id
    title
  }
}`
