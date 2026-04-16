import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import CheckupPage from '@/views/CheckupPage.vue'
import PatientPage from '@/views/PatientPage.vue'
import PatientsPage from '@/views/PatientsPage.vue'
import TokensPage from '@/views/TokensPage.vue'
import RulesPage from '@/views/RulesPage.vue'
import ErrorPage from '@/views/ErrorPage.vue'
import AdminPatientListPage from '@/views/admin/AdminPatientListPage.vue'

import AdminLayout from '@/layouts/AdminLayout.vue'
import AdminPatientAddPage from '@/views/admin/AdminPatientAddPage.vue'

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
        {
            path: '/admin/patients',
            component: AdminPatientListPage,
            meta: {
                layout: AdminLayout,
            },
        },
        {
            path: '/admin/add-patient',
            component: AdminPatientAddPage,
            meta: {
                layout: AdminLayout,
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: ErrorPage,
        },
    ],
    scrollBehavior() {
        return { top: 0, left: 0, behavior: 'smooth' }
    },
})

export default router
