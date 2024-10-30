export const GET_TASKS = `
  query {
    tasks {
    ischecked
    assignee
    description
    duedate
    priority
    stage
    title
    type
    id
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
