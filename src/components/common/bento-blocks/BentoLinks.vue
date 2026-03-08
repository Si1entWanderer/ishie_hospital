<script setup lang="ts">
import type { IBentoLink } from '@/@types/bento'

interface IProps {
    links: IBentoLink[]
}

defineProps<IProps>()
</script>

<template>
    <ul :class="$style.BentoLinks">
        <li v-for="link in links" :class="$style.item" :key="link.id" target="_blank">
            <a :class="$style.link" :href="link.href">
                <svg :class="$style.icon">
                    <use :xlink:href="link.icon" />
                </svg>

                <span :class="$style.label">
                    {{ link.label }}
                </span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" module>
.BentoLinks {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;

    @include respond-to(mobile) {
        grid-template-columns: 1fr;
    }
}

.link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 24px;
    border: 4px solid $main-100;
    border-radius: 32px;
    background-color: white;
    text-decoration: none;
    transition: 0.3s box-shadow;

    @include respond-to(mobile) {
        padding: 16px;
    }

    &:hover {
        box-shadow: 0 0 0 8px rgb(from $main-100 r g b / 20%);
    }

    &:active {
        box-shadow: 0 0 0 6px rgb(from $main-100 r g b / 20%);
    }
}

.icon {
    width: 48px;
    height: 48px;
    color: $main-0;
}

.label {
    display: block;
    flex-grow: 1;
    text-align: center;
    color: $dark-0;

    @include text(p1);

    @include respond-to(mobile) {
        margin-right: 48px;
    }
}
</style>
