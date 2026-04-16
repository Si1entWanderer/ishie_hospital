<script setup lang="ts">
import AdminHeader from '@/components/admin/AdminHeader.vue'

const TITLE = 'Пациенты'
</script>

<template>
    <div :class="$style.AdminPatientListPage">
        <AdminHeader :title="TITLE" />

        <div :class="$style.body">
            <p>Здесь будет список пациентов</p>
        </div>
    </div>
</template>

<style module lang="scss">
.AdminPatientListPage {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.body {
    flex-grow: 1;
    padding: 24px var(--padding-admin-container-horizontal);
}
</style>
