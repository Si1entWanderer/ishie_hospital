<script setup lang="ts">
import { EIcons } from '@/assets/ts/enums'

interface IProps {
    name: EIcons
}

const { name } = defineProps<IProps>()
</script>

<template>
    <svg :class="$style.VIcon">
        <use :xlink:href="name" />
    </svg>
</template>

<style module lang="scss">
.VIcon {
    width: var(--icon-size, 16px);
    height: var(--icon-size, 16px);
}
</style>
