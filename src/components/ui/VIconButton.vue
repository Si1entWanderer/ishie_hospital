<script setup lang="ts">
import { EIcons } from '@/assets/ts/enums'

defineProps<{
    icon: EIcons
}>()
</script>

<template>
    <button :class="$style.VIconButton">
        <svg :class="$style.icon">
            <use :xlink:href="icon" />
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
    border: 4px solid $main-100;
    border-radius: 12px;
    background-color: white;
    color: $dark-0;
    cursor: pointer;
    transition: 0.3s box-shadow;

    @include text(p3);

    &:hover {
        box-shadow: 0 0 0 8px rgb(from var(--button-hover-color, $main-100) r g b / 20%);
    }

    &:active {
        box-shadow: 0 0 0 6px rgb(from var(--button-hover-color, $main-100) r g b / 20%);
    }
}

.icon {
    width: 24px;
    height: 24px;
    color: $dark-0;
}
</style>
