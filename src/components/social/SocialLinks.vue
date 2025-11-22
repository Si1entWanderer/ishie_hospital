<script setup lang="ts">
import { SOCIAL_LINKS } from '@/assets/ts/constants'
</script>

<template>
    <div :class="$style.SocialLinks">
        <a
            v-for="link in SOCIAL_LINKS"
            :class="$style.link"
            :key="link.id"
            :href="link.href"
            target="_blank"
        >
            <svg :class="$style.icon">
                <use :xlink:href="link.icon" />
            </svg>
        </a>
    </div>
</template>

<style lang="scss" module>
.SocialLinks {
    display: flex;
    gap: 8px;
}

.link {
    width: 32px;
    height: 32px;
}

.icon {
    width: 100%;
    height: 100%;
}
</style>
