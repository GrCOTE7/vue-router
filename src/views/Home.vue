<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link v-for="dest in destinations" :key="dest.id" :to="dest.slug">
        <h2 :title="'Id :' + dest.id">{{ dest.name }}</h2>
        <img :src="`/images/${dest.image}`" :alt="dest.name">
      </router-link>
    </div>
  </div>
</template>
<script setup>
import sourceData from '@/data.json'

// export default {
//   data() {
//     return {
//       destinations: sourceData.destinations
//     }
//   }
// }

console.log(sourceData)
const destinations = sourceData.destinations

destinations.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB)
  });
  
</script>
