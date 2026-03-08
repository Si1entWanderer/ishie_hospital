<script setup lang="ts">
import { MAINPAGE_BUTTON_TEXT } from '@/assets/ts/constants'
import { RULES_DATA } from '@/assets/ts/content/rules'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import TextBlock from '@/components/common/TextBlock.vue'
import VButton from '@/components/ui/VButton.vue'
</script>

<template>
    <div :class="$style.RulesPage">
        <div :class="[$style.container, 'container']">
            <VButton :class="$style.button" tag="router-link" to="/">
                {{ MAINPAGE_BUTTON_TEXT }}
            </VButton>

            <BlockWrapper :class="$style.content">
                <TextBlock v-for="block in RULES_DATA" :data="block" :key="block.description" />
            </BlockWrapper>
        </div>
    </div>
</template>

<style lang="scss" module>
.RulesPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.button {
    align-self: flex-start;

    @include respond-to(mobile) {
        width: 100%;
    }
}

.content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 40px;

    @include respond-to(mobile) {
        padding: 24px;
    }
}
</style>
