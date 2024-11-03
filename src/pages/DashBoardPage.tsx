/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
import { defineComponent, onMounted } from 'vue'
import { useTaskStore } from '../store/taskStore'
import { storeToRefs } from 'pinia'
import { Pie, Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
)

export default defineComponent({
  name: 'DashBoardPage',
  setup() {
    const taskStore = useTaskStore()
    const { taskStage, taskType, taskAssignee, totalTasks } =
      storeToRefs(taskStore)

    onMounted(async () => {
      await taskStore.getTotalTasks()
      await taskStore.getTaskAssignee()
      await taskStore.getTaskStages()
      await taskStore.getTaskTypes()
    })

    return {
      taskStage,
      taskType,
      taskAssignee,
      totalTasks
    }
  },
  render() {
    const { taskStage, taskType, taskAssignee, totalTasks } = this

    // Count tasks by stage
    const taskCountByStage = taskStage.reduce((acc, task) => {
      acc[task.stage] = (acc[task.stage] || 0) + 1
      return acc
    }, {})

    // Count tasks by type
    const taskCountByType = taskType.reduce((acc, task) => {
      acc[task.type] = (acc[task.type] || 0) + 1
      return acc
    }, {})

    console.log(taskAssignee.length)

    // Data for the pie chart (Tasks by Stage)
    const stageData = {
      labels: Object.keys(taskCountByStage),
      datasets: [
        {
          label: 'Tasks by Stage',
          data: Object.values(taskCountByStage),
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }
      ]
    }

    // Data for the bar chart (Tasks by Type)
    const typeChartData = {
      labels: Object.keys(taskCountByType),
      datasets: [
        {
          label: 'Tasks by Type',
          data: Object.values(taskCountByType),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    }

    // Chart options for the bar chart
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Task Count'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Task Type'
          }
        }
      }
    }

    return (
      <div class="pt-2 flex flex-nowrap flex-col h-full justify-start">
        <div class="flex flex-row  items-center gap-1  w-full">
          <div class="flex items-center justify-center gap-5 h-20 w-full max-w-xs bg-[#fedf51] rounded-lg shadow-sm">
            <i class="material-icons-outlined text-[40px] text-[#fff]">task</i>
            <div class="text-[#fff]">
              <p>Total task: </p>
              <p class="text-white text-xl font-semibold">{totalTasks}</p>
            </div>
          </div>
          <div class="flex items-center justify-center gap-5 h-20 w-full max-w-xs bg-[#4bc0c099] rounded-lg shadow-sm">
            <i class="material-icons-outlined text-[40px] text-[#fff]">group</i>
            <div class="text-[#fff]">
              <p>Total assignee: </p>
              <p class="text-white text-xl font-semibold">
                {taskAssignee.length}
              </p>
            </div>
          </div>
        </div>
        <div class=" flex flex-nowrap flex-row gap-2 w-full pt-2 pb-3 rounded-xl ">
          <div class="  flex-1 ">
            <div class="h-80  bg-white rounded p-4">
              <Bar data={typeChartData} options={chartOptions} />
            </div>
          </div>
          <div class="basis-1/3">
            <div class="h-80  bg-white rounded p-2">
              <Pie data={stageData} />
            </div>
          </div>
        </div>
      </div>
    )
  }
})
