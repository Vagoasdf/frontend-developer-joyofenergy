<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from "vue-chartjs"

const props = defineProps(["readings"])

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const formatDateLabel = (timestamp) => {
  const date = new Date(timestamp)
  const month = date.getMonth()
  const day = date.getDate()

  const formatPart = (value) => {
    return value < 10 ? `0${value}` : `${value}`
  }

  return `${formatPart(day)}/${formatPart(month + 1)}`
}


const labels = props.readings.map(({ time }) => formatDateLabel(time))
const values = props.readings.map(({ value }) => value)

const data = {
    labels: labels,
    datasets: [
      {
        label: 'kWh usage',
        data: values,
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        borderWidth: 0.2,
        backgroundColor: '#5A8EDA',
        borderRadius: 10
      }
    ]

}


const options = {
    scales: {
    y: { grid: { display: false } },
    x: { grid: { display: false } }
    },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false
}

</script>
<template>
    <Bar id="energyBar-id"
        :data = "data"
        :options="options"    
    />

</template>
