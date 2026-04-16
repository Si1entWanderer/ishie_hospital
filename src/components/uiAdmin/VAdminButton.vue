<script setup lang="ts">
import { computed, useCssModule } from 'vue'

import type { TColor, TSize } from '@/@types/ui'

interface IProps {
    tag?: 'button' | 'a'
    to?: string
    color?: TColor
    size?: TSize
}

const { tag = 'button', to, color = 'primary', size = 'medium' } = defineProps<IProps>()

const $style = useCssModule()

const classList = computed(() => [[$style[`_color-${color}`]], [$style[`_size-${size}`]]])
</script>

<template>
    <component
        :is="tag"
        :href="to"
        :class="[$style.VAdminButton, classList]"
    >
        <slot />
    </component>
</template>

<style module lang="scss">
.VAdminButton {
    display: inline-flex;
    align-items: center;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &._color-primary {
        background-color: var(--color-admin-button-primary);
        color: var(--color-admin-button-primary-text);

        &:hover {
            background-color: var(--color-admin-button-primary-hover);
        }
    }

    &._size-medium {
        padding: 8px 20px;
        border-radius: 6px;

        @include text-admin(body);
    }
}
</style>
