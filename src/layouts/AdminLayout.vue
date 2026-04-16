<script setup lang="ts">
import TheAdminNavigation from '@/components/admin/TheAdminNavigation.vue'
</script>

<template>
    <div :class="$style.AdminLayout">
        <div :class="$style.sidebar">
            <TheAdminNavigation :class="$style.navigaiton" />
        </div>

        <main :class="$style.content">
            <slot />
        </main>
    </div>
</template>

<style module lang="scss">
.AdminLayout {
    position: relative;
    display: flex;
    height: 100%;
    min-height: 100vh;
    padding: 8px;
    gap: 8px;
    background-color: var(--color-admin-background);
}

.sidebar {
    width: var(--size-admin-sidebar-width);
    border: 1px solid var(--color-admin-stroke);
    background-color: var(--color-admin-sidebar);
}

.content {
    display: flex;
    flex-grow: 1;
}

.navigaiton {
    flex-grow: 1;
}
</style>
