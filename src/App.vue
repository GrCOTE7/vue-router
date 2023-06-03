<script setup></script>

<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/hawaii">Hawaii</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
    <RouterLink to="/panama">Panama</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>
