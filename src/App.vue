<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <h1 class="title">Chuck Norris Jokes</h1>
    <div class="wrapper">
      <nav>
        <RouterLink class="page-link" to="/">Jokes</RouterLink>
        <RouterLink class="page-link" to="/myfavourite">My favourite</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  margin-bottom: 10px;
}

.title {
  color: orange;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.title {
  padding: 20px 0px ;
  text-align: center;
  margin-bottom: 5px;
}
</style>
