<script setup lang="ts">
import type { ITextBlock } from '@/@types/blocks'
import BlockWrapper from '@/components/common/BlockWrapper.vue'
import TextBlock from '@/components/common/TextBlock.vue'

interface IProps {
    blocks: ITextBlock[]
}

defineProps<IProps>()
</script>

<template>
    <BlockWrapper :class="$style.BentoTextBlock">
        <TextBlock v-for="block in blocks" :key="block.id" :data="block" />
    </BlockWrapper>
</template>

<style lang="scss" module>
.BentoTextBlock {
    --desktop-border-radius: 32px;

    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
}
</style>
