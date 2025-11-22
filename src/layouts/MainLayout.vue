<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue'
import SocialLinks from '@/components/social/SocialLinks.vue'
</script>

<template>
    <div :class="$style.MainLayout">
        <header :class="$style.header">
            <TheHeader />
        </header>

        <main :class="$style.content">
            <slot />
        </main>

        <div :class="$style.links">
            <SocialLinks />
        </div>
    </div>
</template>

<style lang="scss" module>
.MainLayout {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    min-height: 100vh;
}

.header {
    @media print {
        display: none;
    }
}

.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    padding: 48px 0;
    background-image: url('../assets/images/deksktop-background.jpg');

    @include respond-to(tablet) {
        background-image: url('../assets/images/tablet-background.jpg');
    }

    @include respond-to(mobile) {
        padding: 36px 0 64px;
        background-image: url('../assets/images/mobile-background.jpg');
    }

    @media print {
        padding: 0;
    }
}

.links {
    display: none;

    @include respond-to(mobile) {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        padding: 12px 24px;
        border: 4px solid $pink-100;
        border-radius: 32px;
        background-color: white;
    }

    @media print {
        display: none;
    }
}
</style>
