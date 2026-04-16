<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import TheSprite from '@/components/common/TheSprite.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => route.meta.layout || MainLayout)
</script>

<template>
    <TheSprite />

    <component :is="layoutComponent">
        <RouterView v-slot="{ Component }">
            <transition
                name="fade"
                mode="out-in"
            >
                <component :is="Component" />
            </transition>
        </RouterView>
    </component>
</template>

<style scoped></style>
