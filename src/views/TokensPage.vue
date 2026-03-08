<script setup lang="ts">
import { MAINPAGE_BUTTON_TEXT } from '@/assets/ts/constants'

import TokensBlock from '@/components/hospital/TokensBlock.vue'
import VButton from '@/components/ui/VButton.vue'
</script>

<template>
    <div :class="$style.TokensPage">
        <div :class="[$style.container, 'container']">
            <VButton :class="$style.button" tag="router-link" to="/">
                {{ MAINPAGE_BUTTON_TEXT }}
            </VButton>

            <TokensBlock />
        </div>
    </div>
</template>

<style lang="scss" module>
.TokensPage {
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
</style>
