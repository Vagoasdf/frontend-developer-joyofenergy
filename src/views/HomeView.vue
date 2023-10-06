<script setup>

import EnergyConsumption from '../components/EnergyView/EnergyConsumption/EnergyConsumption.vue'
import SidebarAside from '../components/SidebarAside/SidebarAside.vue'


</script>

<template>
  <div class="home background shadow-2 flex overflow-hidden">
    <SidebarAside></SidebarAside>
    <EnergyConsumption></EnergyConsumption>
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