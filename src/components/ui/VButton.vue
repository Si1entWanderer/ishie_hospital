<script setup lang="ts">
import { computed, useCssModule } from 'vue'

import { EButtonStyles, type EButtonTag } from '@/@types/ui'

interface IProps {
    style?: EButtonStyles
    tag?: EButtonTag
}

const props = withDefaults(defineProps<IProps>(), {
    style: EButtonStyles.default,
    tag: 'button',
})

const $style = useCssModule()

const classList = computed(() => [$style[`_style-${props.style}`]])
</script>

<template>
    <component :is="tag" :class="[$style.VButton, classList]">
        <slot />
    </component>
</template>

<style lang="scss" module>
.VButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--button-gap, 4px);
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s transform;

    @include text(p3);

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }

    &._style-default {
        padding: 8px 20px;
        border: 4px solid $pink-100;
        border-radius: 24px;
        background-color: white;
        color: $dark-0;
    }

    &._style-filled {
        padding: 8px 20px;
        border-radius: 24px;
        background-color: var(--fill-color, $pink-0);
        color: white;

        @include text(p2-b);
    }
}
</style>
