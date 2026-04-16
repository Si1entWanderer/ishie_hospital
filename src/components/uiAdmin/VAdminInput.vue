<script setup lang="ts">
interface IProps {
    modelValue: string | number
}

const { modelValue } = defineProps<IProps>()
</script>

<template>
    <input
        :class="$style.VAdminInput"
        :value="modelValue"
    />
</template>

<style module lang="scss">
.VAdminInput {
    padding: 8px 12px;
    border: 1px solid var(--color-admin-input-stroke);
    border-radius: 0;
    background-color: var(--color-admin-input-background);
    color: var(--color-admin-input-value);

    @include text-admin(body);

    &::placeholder {
        color: var(--color-admin-input-placeholder);
    }

    &:focus {
        outline: none;
    }
}
</style>
