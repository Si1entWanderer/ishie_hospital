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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--button-gap, 4px);
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s box-shadow;

    @include text(p3);

    &:hover {
        box-shadow: 0 0 0 8px rgb(from var(--button-hover-color, $main-100) r g b / 20%);
    }

    &:active {
        box-shadow: 0 0 0 6px rgb(from var(--button-hover-color, $main-100) r g b / 20%);
    }

    &._style-default {
        padding: 8px 20px;
        border: 4px solid $main-100;
        border-radius: 24px;
        background-color: white;
        color: $dark-0;
    }

    &._style-filled {
        --button-hover-color: var(--fill-color, #{$main-0});
        padding: 8px 20px;
        border-radius: 24px;
        background-color: var(--fill-color, $main-0);
        color: white;

        @include text(p2-b);
    }
}
</style>
