<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/hawaii">Hawaii</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
    <RouterLink to="/panama">Panama</RouterLink>
  </div>
</template>

<style scoped>

#nav .vue-class-active-link {
  color:red;
  border-bottom: 2px solid red;
}
</style>