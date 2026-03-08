<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { EffectCreative } from 'swiper/modules'

import { EIcons } from '@/assets/ts/enums'
import type { Swiper as SwiperType, SwiperOptions } from 'swiper/types'

import patients from '@/assets/ts/patients'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import PatientPreviewCard from '@/components/patient/PatientPreviewCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/effect-creative'

const BLOCK_TITLE = 'Лучшие пациенты'
const SWIPER_OPTIONS: SwiperOptions = {
    modules: [EffectCreative],
    effect: 'creative',
    slidesPerView: 1,
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    },
    spaceBetween: 24,
    loop: true,
}

const bestMarksCount = patients.reduce(
    (acc, item) => {
        const marksCount = item.therapyMarks?.length || 0
        if (marksCount >= acc.first) {
            acc.first = marksCount
        } else if (marksCount > acc.second) {
            acc.second = marksCount
        }

        return acc
    },
    { first: 0, second: 0 },
)

const bestPatients = [...patients]
    .filter((patient) => {
        const marksLength = patient.therapyMarks?.length || 0
        return marksLength >= bestMarksCount.second
    })
    .sort((a, b) => (b.therapyMarks?.length || 0) - (a.therapyMarks?.length || 0))

const swiper = ref<SwiperType | null>(null)

function onSwiperInit(swiperInstance: SwiperType) {
    swiper.value = swiperInstance
}

function onPrev() {
    swiper.value?.slidePrev()
}

function onNext() {
    swiper.value?.slideNext()
}

onUnmounted(() => {
    swiper.value?.destroy()
})
</script>

<template>
    <BlockWrapper :class="$style.BentoBestPatients" :title="BLOCK_TITLE">
        <div :class="$style.content">
            <button :class="[$style.navigation, $style._prev]" @click="onPrev">
                <svg :class="$style.navigationIcon">
                    <use :xlink:href="EIcons.arrowBackAlt" />
                </svg>
            </button>

            <Swiper :class="$style.slider" v-bind="SWIPER_OPTIONS" @swiper="onSwiperInit">
                <SwiperSlide
                    v-for="patient in bestPatients"
                    :class="$style.slide"
                    :key="patient.id"
                >
                    <RouterLink :class="$style.link" :to="`/patients/${patient.id}`">
                        <PatientPreviewCard :data="patient" />
                    </RouterLink>
                </SwiperSlide>
            </Swiper>

            <button :class="[$style.navigation, $style._next]" @click="onNext">
                <svg :class="$style.navigationIcon">
                    <use :xlink:href="EIcons.arrowForwardAlt" />
                </svg>
            </button>
        </div>
    </BlockWrapper>
</template>

<style lang="scss" module>
.BentoBestPatients {
    --desktop-border-radius: 32px;
}

.content {
    display: flex;
    justify-content: center;
    gap: 4px;
    width: 100%;
    padding: 24px;
}

.slider {
    border-radius: 24px;
}

.link {
    display: flex;
    justify-content: center;
    text-decoration: none;
}

.navigation {
    $hover-gradient-color: rgb(from $main-300 r g b / 50%);

    position: relative;
    padding: 0 4px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        &:before {
            opacity: 1;
        }
    }

    &:active {
        .navigationIcon {
            transform: scale(0.9);
        }
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0 0 0 0;
        z-index: 0;
        border-radius: 32px 0 0 32px;
        background-image: linear-gradient(to left, transparent 0%, $hover-gradient-color 60%);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &._next {
        &::before {
            border-radius: 0 32px 32px 0;
            background-image: linear-gradient(to right, transparent 0%, $hover-gradient-color 60%);
        }
    }
}

.navigationIcon {
    position: relative;
    z-index: 1;
    width: 24px;
    height: 24px;
    color: $dark-0;
    transition: transform 0.3s;
}
</style>
