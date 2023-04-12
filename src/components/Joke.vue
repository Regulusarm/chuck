<template>
  <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <p class="card_text">{{ joke }}</p>
          <button @click="action" class="card_btn">{{ isLike ? 'Like' : 'Unlike'  }}</button>
        </div>
      </div>
    </li>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { limit } from '@/const';

const props = defineProps<{
  joke: string;
}>();

const emits = defineEmits<{
  (e: 'reload'): void;
}>();

const isLike = ref(true);

function getJokesFromStorage() {
  const myFavourite = localStorage.getItem('MyFavourite');
  return myFavourite ? JSON.parse(myFavourite) : [];
}

function addJoke() {
  const myFavourite = getJokesFromStorage();
  if (myFavourite.length >= limit) {
    myFavourite.shift();
  } 
  myFavourite.push(props.joke);
  localStorage.setItem('MyFavourite', JSON.stringify(myFavourite));
  
  isLike.value = false;
  emits('reload');
}

function removeJoke() {
  const myFavourite = getJokesFromStorage();
  const filteredMyFavourite = myFavourite.filter((joke: string) => joke !== props.joke)
  localStorage.setItem('MyFavourite', JSON.stringify(filteredMyFavourite));
  isLike.value = true;
  emits('reload');
}

onMounted(() => {
  const myFavourite = getJokesFromStorage();
  if (myFavourite.some((joke: string) => joke == props.joke)) {
    isLike.value = false;
  }
})

function action() {
  const myFavourite = getJokesFromStorage();
  if (myFavourite.every((joke: string) => joke !== props.joke)) {
    addJoke();
  } else {
    removeJoke();
  }
}

</script>

<style>
.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.card_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;
}

.card_btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.card_btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}
.card_btn:active {
  background-color: rgba(238, 238, 238, 0.548);
}
</style>