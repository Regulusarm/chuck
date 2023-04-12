<template>
  <div class="control">
    <button @click="getJoke" class="btn" style="margin-right: 10px;">Get Joke</button>
    <button @click="getFlowofJokes" class="btn">Get Flow of Jokes</button>
  </div>
  <ul class="cards">
    <Joke v-for="joke in jokes" :joke="joke.value" :key="joke.id" />
  </ul>
</template>

<script setup lang="ts">
import Joke from '@/components/Joke.vue'
import JokesAPI from '@/api/jokes.api';
import { ref, type Ref } from 'vue';

const jokes: Record<string, any> = ref([]);
let intervalId:number = 0;

async function getJoke() {
  const joke = await JokesAPI.getJoke();
  jokes.value.push(joke);
}

async function getFlowofJokes() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = 0;
  } else {
    intervalId = setInterval(getJoke, 3000);
  }
}
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  list-style: none;
  padding: 0px;
}

.btn {
  color: var(--color-text);
  font-size: 20px;
  text-align: center;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: white;
}
.btn:hover {
    background-color: rgba(255, 198, 91, 0.688);
  }
.btn:active{
  background-color: rgb(255, 204, 110);
}
.control {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
