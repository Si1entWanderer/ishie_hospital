<script setup lang="ts">
import type { TTextBlock } from '@/@types/blocks'
import { ETitleTag } from '@/assets/ts/enums'

withDefaults(
    defineProps<{
        data: TTextBlock
        titleTag?: ETitleTag
    }>(),
    {
        titleTag: ETitleTag.h2,
    },
)
</script>

<template>
    <div :class="$style.TextBlock">
        <component :class="$style.title" :is="titleTag">
            <div v-html="data.title" />
        </component>

        <div v-if="data.description" :class="$style.description" v-html="data.description" />
    </div>
</template>

<style lang="scss" module>
.TextBlock {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include respond-to(mobile) {
        gap: 8px;
    }
}

.title {
    margin: 0;
    text-transform: uppercase;
    color: $pink-0;

    @include text(t1);

    @include respond-to(mobile) {
        @include text(t2);
    }
}

.description {
    color: $dark-0;

    @include text(p1);

    @include respond-to(mobile) {
        @include text(p3);
    }
}
</style>
