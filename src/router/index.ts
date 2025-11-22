import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import PatientPage from '@/views/PatientPage.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/patients/:id',
            component: PatientPage,
        },
    ],
})

export default router
