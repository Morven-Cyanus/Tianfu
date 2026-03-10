import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/origin',
    name: 'origin',
    component: () => import('@/views/OriginView.vue'),
  },
  {
    path: '/seven-sages',
    name: 'seven-sages',
    component: () => import('@/views/SevenSagesView.vue'),
  },
  {
    path: '/thirteen-clans',
    name: 'thirteen-clans',
    component: () => import('@/views/ThirteenClansView.vue'),
  },
  {
    path: '/poem',
    name: 'poem',
    component: () => import('@/views/PoemView.vue'),
  },
  {
    path: '/elites',
    name: 'elites',
    component: () => import('@/views/ElitesView.vue'),
  },
  {
    path: '/elements',
    name: 'elements',
    component: () => import('@/views/ElementsView.vue'),
  },
  {
    path: '/dreams',
    name: 'dreams',
    component: () => import('@/views/DreamsView.vue'),
  },
  {
    path: '/join-us',
    name: 'join-us',
    component: () => import('@/views/JoinUsView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
