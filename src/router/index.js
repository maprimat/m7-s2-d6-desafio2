import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/games',
        name: 'games',
        component: () => import('../views/GamesView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/404View.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router