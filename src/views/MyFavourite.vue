<template>
  <div class="controller">
    <button @click="deleteAll" class="btn">Delete All</button>
  </div>
  <div class="cards">
   <Joke v-for="joke in favouriteJokes" :joke="joke" :key="joke" @reload="getItems" />
  </div>
</template>

<script setup lang="ts">
import Joke from '@/components/Joke.vue'
import { onMounted, ref } from 'vue';
const favouriteJokes = ref([]);

function getItems() {
  const myFavourite = localStorage.getItem('MyFavourite');
  favouriteJokes.value = myFavourite ? JSON.parse(myFavourite) : [];
}

function deleteAll() {
  localStorage.setItem('MyFavourite', JSON.stringify([]));
  getItems();
}

onMounted(() => {
  getItems();
})

</script>

<style>
.controller {
  padding-left: 16px;
}
</style>
