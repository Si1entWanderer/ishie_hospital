<script setup lang="ts">
import { EIcons } from '@/assets/ts/enums';

const emit = defineEmits<{
    clickPrev: [],
    clickNext: [],
}>()
</script>

<template>
    <div :class="$style.VNavigation">
        <button
            :class="[$style.button, $style._prev]"
            @click="emit('clickPrev')"
        >
            <svg :class="$style.icon">
                <use :xlink:href="EIcons.arrowBackAlt"/>
            </svg>
        </button>

        <button
            :class="[$style.button, $style._next]"
            @click="emit('clickNext')"
        >
            <svg :class="$style.icon">
                <use :xlink:href="EIcons.arrowForwardAlt"/>
            </svg>
        </button>
    </div>
</template>

<style lang="scss" module>
.VNavigation {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    border: 4px solid $pink-100;
    border-radius: 24px;
    background: white;
    color: $dark-0;
    font-size: 0;
    cursor: pointer;
    transition: .3s transform;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }

    &._prev {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right-width: 2px;
        padding: 6px 6px 6px 8px;
    }

    &._next {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-left-width: 2px;
        padding: 6px 8px 6px 6px;
    }
}

.icon {
    width: 24px;
    height: 24px;
}
</style>
