<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations" id="destinations">
      <router-link 
      v-for="destination in destinations" 
      :key="destination.id" 
      :to="{name:'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >
        <h2 :title="'Id :' + destination.id">
          {{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" style="margin-right:5px">
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

// console.log(sourceData)
let destinations = sourceData.destinations

destinations.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB)
  });
  
</script>
