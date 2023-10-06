<script setup>
import EnergyChart from '../EnergyChart/EnergyChart.vue'

import { getReadings, groupByDay, sortByTime } from '@/components/reading/reading'

function dailyReadings() {
  const readings =  getReadings()
  let daysAgo = 30
  let dailyReadings = sortByTime(groupByDay(readings).slice(-daysAgo))
  return dailyReadings
}

function acumulatedKW(readings){
  const kWAcumm=0
  for ( let readingIndex in props.readings ) {
    kWAcumm += props.readings[readingIndex].value
  }
  return  kWAcumm
}

let readings = dailyReadings()

</script>
<template>
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
          <EnergyChart
          :readings = "readings"
          />
          <canvas id="usageChart"></canvas>
        </section>
    </article>
</template>