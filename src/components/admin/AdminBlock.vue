<script setup lang="ts">
interface IProps {
    title?: string
}

const { title } = defineProps<IProps>()
</script>

<template>
    <div :class="$style.AdminBlock">
        <div
            v-if="title"
            :class="$style.title"
        >
            {{ title }}
        </div>

        <div :class="$style.body">
            <slot />
        </div>
    </div>
</template>

<style module lang="scss">
.AdminBlock {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    border: 1px solid var(--color-admin-block-stroke);
    background-color: var(--color-admin-block-background);
}

.title {
    color: var(--color-admin-text-primary);

    @include text-admin(h2-sb);
}

.body {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>
