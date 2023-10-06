import { renderChart } from './components/chart/chart.js'
import { getReadings, groupByDay, sortByTime } from './data/reading.js'

async function reloadReadings() {
  const readings = await getReadings()
  let daysAgo = 30
  let dailyReadings = sortByTime(groupByDay(readings).slice(-daysAgo))
  renderChart(dailyReadings)

  let kWAcumm = 0
  for (let readingIndex in dailyReadings) {
    console.log(dailyReadings[readingIndex])
    kWAcumm += dailyReadings[readingIndex].value
  }
}

reloadReadings()

const reloadButton = document.querySelector('button')
reloadButton.addEventListener('click', reloadReadings)
