<template>
  <section class="destination">
    <h1>Hello Destination {{ this.$route.params.id }}: {{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`../../public/images/${destination.image}`" alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
import sourceData from '@/data.json'

let destinations = sourceData.destinations

destinations.sort((a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  return nameA.localeCompare(nameB)
})

export default {
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    },
    destination() {
      return destinations.find((destination) => this.destinationId === destination.id)
    }
  }
}
// console.log(this.destination.name)
</script>
