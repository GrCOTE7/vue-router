<template>
  <div id="nav">
    
    <RouterLink id="logo" to="/">Travel App</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    
    <router-link 
      v-for="destination in destinations" 
      :key="destination.id" 
      :to="{name:'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >{{ destination.name }}</router-link>

  </div>
</template>

<script setup>
import dataSource from '@/data.json'
const destinations = dataSource.destinations

destinations.sort((a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  return nameA.localeCompare(nameB)
})
</script>