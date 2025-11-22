<script setup lang="ts"></script>

<template>
    <div :class="$style.BlockWrapper">
        <slot />
    </div>
</template>

<style lang="scss" module>
.BlockWrapper {
    border: 4px solid $pink-100;
    border-radius: 48px;
    background-color: white;

    @include respond-to(mobile) {
        border-radius: 32px;
    }
}
</style>
