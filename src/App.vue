<template>

  <div class="container">
    <TheNavigation />
    
    <router-view />
  </div>
  
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue'

// const components = TheNavigation

// export default {
//   components: {TheNavigation}
// }
</script>