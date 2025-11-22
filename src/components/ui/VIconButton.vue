<script setup lang="ts">
import { EIcons } from '@/assets/ts/enums';

defineProps<{
    icon: EIcons,
}>()
</script>

<template>
    <button :class="$style.VIconButton">
        <svg :class="$style.icon">
            <use :xlink:href="icon"/>
        </svg>
    </button>
</template>

<style lang="scss" module>
.VIconButton {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border: 4px solid $pink-100;
    border-radius: 12px;
    background-color: white;
    color: $dark-0;
    cursor: pointer;
    transition: .3s transform;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }
}

.icon {
    width: 24px;
    height: 24px;
    color: $dark-0;
}
</style>
