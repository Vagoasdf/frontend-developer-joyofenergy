<script setup>

/**
 * 
 * Chart not working until we install vuerchartJS
 * 
import { renderChart } from '../components/chart/chart'
import { getReadings, groupByDay, sortByTime } from '../components/reading/reading'

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

 */

</script>

<template>
  <div class="home background shadow-2 flex overflow-hidden">
      <!-- Major Component Candidate N#1: Aside Bar-->
      <aside class="p3 menuWidth overflow-auto">
        <p class="h2 greyBlue">⚡️ 1.4kW</p>
        <p class="darkgray mb2">Power draw</p>
        <p class="h2 greyBlue">☀️️ 5.8kW</p>
        <p class="darkgray mb2">Solar power production</p>
        <p class="h2 greyBlue">🔌️ 4.4kW</p>
        <p class="darkgray mb2">Fed into grid</p>
        <!-- Major Component Candidate N#3 Devices List-->
        <section class="h5 darkgray mb2">
          <h4 class="h4 mb1">Your devices:</h4>
          <!-- Repetable Component Candidate N#1 Device-->
          <div class="shadow-2 roundedMore bg-super-light-grey mb1">
            <p class="darkgray pl2 pt1 pb1">Air conditioner</p>
            <p class="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
              0.3093kW
            </p>
          </div>
          <div class="shadow-2 roundedMore bg-super-light-grey mb1">
            <p class="darkgray pl2 pt1 pb1">Wi-Fi router</p>
            <p class="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
              0.0033kW
            </p>
          </div>
          <div class="shadow-2 roundedMore bg-super-light-grey mb1">
            <p class="darkgray pl2 pt1 pb1">Humidifer</p>
            <p class="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
              0.0518kW
            </p>
          </div>
          <div class="shadow-2 roundedMore bg-super-light-grey mb1">
            <p class="darkgray pl2 pt1 pb1">Smart TV</p>
            <p class="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
              0.1276kW
            </p>
          </div>
          <div class="shadow-2 roundedMore bg-super-light-grey mb1">
            <p class="darkgray pl2 pt1 pb1">Diffuser</p>
            <p class="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
              0.0078kW
            </p>
          </div>
          <div class="shadow-2 roundedMore bg-super-light-grey mb1">
            <p class="darkgray pl2 pt1 pb1">Refrigerator</p>
            <p class="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
              0.0923kW
            </p>
          </div>
        </section>
      </aside>
      <!-- Major Component Candidate N#2 Energy Consumption Graphic-->
      <article class="bg-very-light-grey p3 flex-auto overflow-auto">
        <h1 class="regular darkgray line-height-1 mb3">Energy consumption</h1>
        <section class="mb3">
          <button
            class="h5 inline-block shadow-2 pl2 pr2 pt1 pb1 roundedMore border-grey bg-blue white bold"
          >
            Last 30 days
          </button>
        </section>
        <section class="chartHeight mb3">
          <canvas id="usageChart"></canvas>
        </section>
      </article>
  </div>

</template>


<style>

@import '../assets/index.css';


@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
  }
}
</style>