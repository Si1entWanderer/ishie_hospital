<script setup lang="ts">
import TheSprite from '@/components/common/TheSprite.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <TheSprite />

    <MainLayout>
        <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
    </MainLayout>
</template>

<style scoped></style>
