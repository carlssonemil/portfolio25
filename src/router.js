import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
