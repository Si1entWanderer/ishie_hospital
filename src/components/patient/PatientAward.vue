<script setup lang="ts">
import type { TTherapyMark } from '@/@types/patient'

import { ref, useCssModule, computed } from 'vue'

import { THERAPY_FRAME_BY_GRADE } from '@/assets/ts/constants'

const FRAME_ALT = 'Рамка достижения'
const TOKEN_ALT = 'Жетон терапии'

enum EImageType {
    frame = 'frame',
    token = 'token',
}

interface IProps {
    mark: TTherapyMark
}

defineProps<IProps>()

const $style = useCssModule()

const isFrameLoaded = ref(false)
const isTokenLoaded = ref(false)

const isBothImagesLoaded = computed(() => isFrameLoaded.value && isTokenLoaded.value)

const classList = computed(() => ({
    [$style._loaded]: isBothImagesLoaded.value,
}))

function onImageLoad(image: EImageType) {
    if (image === EImageType.frame) {
        isFrameLoaded.value = true
    } else {
        isTokenLoaded.value = true
    }
}
</script>

<template>
    <div :class="[$style.PatientAward, classList]">
        <transition name="fade">
            <div v-if="!isBothImagesLoaded" :class="$style.preloader" />
        </transition>

        <img
            :src="THERAPY_FRAME_BY_GRADE[mark.grade]"
            :class="$style.frame"
            :alt="FRAME_ALT"
            @load="onImageLoad(EImageType.frame)"
        />

        <img
            :src="mark.image"
            :class="$style.token"
            :alt="TOKEN_ALT"
            @load="onImageLoad(EImageType.token)"
        />
    </div>
</template>

<style lang="scss" module>
.PatientAward {
    position: relative;
    width: 280px;
    height: 280px;

    .frame,
    .token {
        opacity: 0;
        transition: 0.3s opacity;
    }

    &._loaded {
        .frame,
        .token {
            opacity: 1;
        }
    }
}

.frame {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.token {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 116px;
    height: 116px;
    object-fit: contain;
    transform: translate(-50%, -50%);
}

.preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 194px;
    height: 194px;
    background-color: $dark-100;
    border-radius: 50%;
    background: linear-gradient(90deg, $light-300 25%, $light-100 37%, $light-300 63%);
    background-size: 400% 100%;
    animation: skeleton-loading 1.4s ease infinite;
    transform: translate(-50%, -50%);
}

@keyframes skeleton-loading {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: 0 0;
    }
}
</style>
