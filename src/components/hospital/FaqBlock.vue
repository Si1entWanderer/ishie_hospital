<script setup lang="ts">
import { FAQ_TEXTS } from '@/assets/ts/constants'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import TextBlock from '@/components/common/TextBlock.vue'
</script>

<template>
    <BlockWrapper :class="$style.FaqBlock">
        <TextBlock v-for="text in FAQ_TEXTS" :key="text.id" :data="text" />
    </BlockWrapper>
</template>

<style lang="scss" module>
.FaqBlock {
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding: 40px;

    @include respond-to(mobile) {
        padding: 24px;
    }
}
</style>
