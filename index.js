import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";


async function reloadReadings() {
    const readings = await getReadings();
    renderChart(sortByTime(groupByDay(readings)).slice(-30));
}

reloadReadings()

const reloadButton = document.querySelector("button");
reloadButton.addEventListener("click", reloadReadings);
