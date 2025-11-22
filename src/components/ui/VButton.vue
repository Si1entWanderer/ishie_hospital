<script setup lang="ts">
</script>

<template>
    <button :class="$style.VButton">
        <slot/>
    </button>
</template>

<style lang="scss" module>
.VButton {
    display: flex;
    justify-content: center;
    padding: 8px 20px;
    border: 4px solid $pink-100;
    border-radius: 24px;
    background-color: white;
    color: $dark-0;
    cursor: pointer;
    transition: .3s transform;

    @include text(p3);

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }
}
</style>
