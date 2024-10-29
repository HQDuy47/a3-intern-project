import { computed, defineComponent, ref } from 'vue'
import TaskItem from '../components/TaskItem'
import { useTaskStore } from '../store/taskStore'

export default defineComponent({
  name: 'TaskPage',
  setup() {
    const taskStore = useTaskStore()

    // const tasks = ref([
    //   {
    //     id: '1',
    //     title: 'Design a new website',
    //     description: 'Design a new website for a client',
    //     type: 'Design',
    //     dueDate: 'Today',
    //     stage: 'In progress',
    //     priority: 'High',
    //     team: 'Design',
    //     assignee: 'John Doe',
    //     ischecked: true
    //   },
    //   {
    //     id: '2',
    //     title: 'Develop API',
    //     description: 'Develop a new API for the project',
    //     type: 'Development',
    //     dueDate: 'Tomorrow',
    //     stage: 'Not started',
    //     priority: 'Medium',
    //     team: 'Development',
    //     assignee: 'Alice Smith',
    //     ischecked: false
    //   },
    //   {
    //     id: '3',
    //     title: 'Write documentation',
    //     description: 'Write documentation for the project',
    //     type: 'Documentation',
    //     dueDate: 'Today',
    //     stage: 'Not started',
    //     priority: 'Medium',
    //     team: 'Development',
    //     assignee: 'Chris Lee',
    //     ischecked: false
    //   },
    //   {
    //     id: '4',
    //     title: 'Prepare presentation',
    //     description: 'Prepare presentation for the project',
    //     type: 'Presentation',
    //     dueDate: 'Tomorrow',
    //     stage: 'In progress',
    //     priority: 'High',
    //     team: 'Design',
    //     assignee: 'Sarah Wilson',
    //     ischecked: false
    //   },
    //   {
    //     id: '5',
    //     title: 'Set up project repository',
    //     description: 'Set up project repository for the project',
    //     type: 'Code',
    //     dueDate: 'Next week',
    //     stage: 'In progress',
    //     priority: 'Low',
    //     team: 'Development',
    //     assignee: 'Mike Davis',
    //     ischecked: false
    //   },
    //   {
    //     id: '6',
    //     title: 'Conduct user research',
    //     description: "Conduct user research for the project's target audience",
    //     type: 'Research',
    //     dueDate: 'Next week',
    //     stage: 'Not started',
    //     priority: 'High',
    //     team: 'Research',
    //     assignee: 'Anna Garcia',
    //     ischecked: false
    //   },
    //   {
    //     id: '7',
    //     title: 'Prepare presentation',
    //     description: "Prepare presentation for the project's stakeholders",
    //     type: 'Presentation',
    //     dueDate: 'Tomorrow',
    //     stage: 'In progress',
    //     priority: 'High',
    //     team: 'Design',
    //     assignee: 'Sarah Wilson',
    //     ischecked: false
    //   },
    //   {
    //     id: '8',
    //     title: 'Set up project repository',
    //     description: "Set up project repository for the project's codebase",
    //     type: 'Code',
    //     dueDate: 'Next week',
    //     stage: 'In progress',
    //     priority: 'Low',
    //     team: 'Development',
    //     assignee: 'Mike Davis',
    //     ischecked: false
    //   },
    //   {
    //     id: '9',
    //     title: 'Conduct user research',
    //     description: "Conduct user research for the project's target audience",
    //     type: 'Research',
    //     dueDate: 'Next week',
    //     stage: 'Not started',
    //     priority: 'High',
    //     team: 'Research',
    //     assignee: 'Anna Garcia',
    //     ischecked: false
    //   }
    // ])

    const handleCheck = (id) => {
      const task = taskStore.tasks.find((task) => task.id === id)
      if (task) {
        task.ischecked = !task.ischecked
      }
    }

    return { handleCheck, taskStore }
  },
  render() {
    const { handleCheck, taskStore } = this

    return (
      <div class="pt-3 flex flex-nowrap flex-col gap-3 items-start h-full justify-start">
        {['Today', 'Tomorrow', 'Next week'].map((date) => (
          <div key={date} class="w-full bg-[#fff] pt-4 pb-2 rounded-xl">
            <div class="grid grid-cols-8 gap-4 text-xs font-bold w-full items-center text-[#7f7f7fff] px-4 pb-3">
              <div class="col-span-3">
                <p class="text-[#231c16ff] text-[16px]">{date}</p>
              </div>
              <div class="text-center">
                <p>DUE DATE</p>
              </div>
              <div class="text-center">
                <p>STAGE</p>
              </div>
              <div class="text-center">
                <p>PRIORITY</p>
              </div>
              <div class="text-center">
                <p>TYPE</p>
              </div>
              <div class="text-center">
                <p>ASSIGNEE</p>
              </div>
            </div>
            <div class="overflow-y-auto max-h-[93px]">
              {/* {getTasksByDueDate(date).map((task) => (
                <div key={task.id}>
                  <hr class="solid" />
                  <TaskItem task={task} onCheck={() => handleCheck(task.id)} />
                </div>
              ))} */}
              {taskStore.tasks.map((item) => (
                <div key={item.id}>
                  <hr class="solid" />
                  <TaskItem task={item} onCheck={() => handleCheck(item.id)} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div></div>
      </div>
    )
  }
})
