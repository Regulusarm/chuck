import { createRouter, createWebHistory } from 'vue-router'
import Jokes from '../views/Jokes.vue'
import MyFavourite from '../views/MyFavourite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Jokes
    },
    {
      path: '/myfavourite',
      name: 'myfavourite',
      component: MyFavourite
    }
  ]
})

export default router
