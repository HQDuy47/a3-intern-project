/* eslint-disable space-before-function-paren */
// PieChart.jsx
import { defineComponent } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default defineComponent({
  name: 'PieChart',
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div>
        <Pie chartData={props.chartData} chartOptions={props.chartOptions} />
      </div>
    )
  }
})
