<script setup lang="ts">
interface IProps {
    title: string
}

const { title } = defineProps<IProps>()
</script>

<template>
    <div :class="$style.AdminHeader">
        <h1 :class="$style.title">{{ title }}</h1>

        <div :class="$style.actions">
            <slot />
        </div>
    </div>
</template>

<style module lang="scss">
.AdminHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px var(--padding-admin-container-horizontal);
    border: 1px solid var(--color-admin-stroke);
}

.title {
    margin: 0;
    color: var(--color-admin-text-primary);

    @include text-admin(h1-sb);
}
</style>
