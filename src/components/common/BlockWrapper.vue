<script setup lang="ts">
interface IProps {
    title?: string
}
defineProps<IProps>()
</script>

<template>
    <div :class="$style.BlockWrapper">
        <p v-if="title" :class="$style.title" v-html="title" />

        <slot />
    </div>
</template>

<style lang="scss" module>
.BlockWrapper {
    outline: 4px solid $main-100;
    border-radius: var(--desktop-border-radius, 48px);
    background-color: white;

    @include respond-to(mobile) {
        border-radius: var(--mobile-border-radius, 32px);
    }
}

.title {
    margin: 0;
    padding: var(--vertical-padding, 12px) var(--horizontal-padding, 24px);
    border-bottom: 2px solid $main-100;
    color: $dark-0;

    @include text(p2);
}
</style>
