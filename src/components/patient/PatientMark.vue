<script setup lang="ts">
import type { TTherapyMark } from '@/@types/patient'

defineProps<{
    mark: TTherapyMark
}>()
</script>

<template>
    <div :class="$style.PatientMark">
        <img :class="$style.image" :src="mark.image" :title="mark.description" />
    </div>
</template>

<style lang="scss" module>
.PatientMark {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.image {
    width: 180px;
    height: auto;
    aspect-ratio: 1/1;
    cursor: help;
}
</style>
