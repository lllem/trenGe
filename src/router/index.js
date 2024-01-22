import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quest/:id',
      props: true,
      name: 'quest',
      component: () => import('../views/QuestView.vue'),
    },
  ]
})

export default router
