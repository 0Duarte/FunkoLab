import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Carrinho from "../views/Carrinho/Carrinho.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: Carrinho

    }
  ]
})

export default router
