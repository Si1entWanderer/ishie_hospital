<script setup lang="ts">
import type { ITextBlock } from '@/@types/blocks'
import { ETitleTag } from '@/assets/ts/enums'

withDefaults(
    defineProps<{
        data: ITextBlock
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
    gap: 16px;

    @include respond-to(mobile) {
        gap: 16px;
    }
}

.title {
    margin: 0;
    text-transform: uppercase;
    color: var(--title-color, $main-0);

    @include text(t1);

    @include respond-to(mobile) {
        @include text(t2);
    }

    @media print {
        @include text(p3-b);
    }
}

.description {
    color: $dark-0;

    @include text(p1);

    @include respond-to(mobile) {
        @include text(p3);
    }

    @media print {
        @include text(p4);
    }

    & > * {
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 8px;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        color: $main-0;
    }

    b {
        color: $main-0;
    }

    ul {
        margin: 0;
        padding-left: 28px;

        li {
            @include text(p3);

            @media print {
                @include text(p4);
            }
        }
    }

    li {
        &:not(:last-child) {
            margin-bottom: 4px;
        }
    }
}
</style>
