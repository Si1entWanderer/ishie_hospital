import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import CheckupPage from '@/views/CheckupPage.vue'
import PatientPage from '@/views/PatientPage.vue'
import PatientsPage from '@/views/PatientsPage.vue'
import TokensPage from '@/views/TokensPage.vue'
import RulesPage from '@/views/RulesPage.vue'

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
        {
            path: '/checkup',
            component: CheckupPage,
        },
        {
            path: '/patients',
            component: PatientsPage,
        },
        {
            path: '/tokens',
            component: TokensPage,
        },
        {
            path: '/rules',
            component: RulesPage,
        },
    ],
    scrollBehavior() {
        return { top: 0, left: 0, behavior: 'smooth' }
    },
})

export default router
