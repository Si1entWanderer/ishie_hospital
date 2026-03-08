<script setup lang="ts">
import { MAINPAGE_BUTTON_TEXT } from '@/assets/ts/constants'
import shizImage from '@/assets/images/shiz.gif'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import VButton from '@/components/ui/VButton.vue'
import { EButtonStyles } from '@/@types/ui'

const SHIZ_IMAGE_ALT = 'vtuber в дурке'
const ERROR_CODE = '404'
const TITLE = 'ТЫ ПИСЯ'
const DESCRIPTION = 'А такой страницы не существует!'
</script>

<template>
    <div :class="$style.ErrorPage">
        <div :class="[$style.container, 'container']">
            <BlockWrapper :class="$style.wrapper">
                <div :class="$style.imageContainer">
                    <img :class="$style.image" :src="shizImage" :alt="SHIZ_IMAGE_ALT" />
                </div>

                <h2 :class="$style.hidden">
                    {{ DESCRIPTION }}
                </h2>

                <p :class="$style.code">
                    {{ ERROR_CODE }}
                </p>

                <p :class="$style.title">
                    {{ TITLE }}
                </p>

                <p :class="$style.description">
                    {{ DESCRIPTION }}
                </p>

                <VButton tag="router-link" to="/" :style="EButtonStyles.filled">
                    {{ MAINPAGE_BUTTON_TEXT }}
                </VButton>
            </BlockWrapper>
        </div>
    </div>
</template>

<style lang="scss" module>
.ErrorPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 560px;
    height: 100%;
    min-height: 420px;
    padding: 24px;
}

.imageContainer {
    width: 200px;
    height: 200px;
    margin-bottom: -16px;
}

.image {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.hidden {
    display: none;
}

.code {
    position: absolute;
    left: 50%;
    top: calc(50% - 46px);
    z-index: 0;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 176px;
    line-height: 1.15;
    font-weight: bold;
    color: $light-100;
    transform: translate(-50%, -50%);

    @include respond-to(mobile-s) {
        font-size: 120px;
    }
}

.title {
    position: relative;
    z-index: 1;
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 28px;
    line-height: 32px;
    font-weight: bold;
    color: $main-0;
}

.description {
    position: relative;
    z-index: 1;
    margin-top: 0;
    margin-bottom: 32px;
    color: $dark-0;

    @include text(p3);
}
</style>
