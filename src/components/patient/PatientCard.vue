<script setup lang="ts">
import { computed } from 'vue'

import type { TPatient } from '@/@types/patient'
import { EIcons } from '@/assets/ts/enums'

import SEAL_IMAGE from '@/assets/images/seal.png'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import TextBlock from '@/components/common/TextBlock.vue'

const PATIENT_IMAGE_ALT = 'фото пациента'
const SEAL_IMAGE_ALT = 'шуточная печать'

const LABELS = {
    NAME: 'Имя',
    SEX: 'Пол',
    BIRTH_DATE: 'Дата рождения',
    RESIDENTAL_ADDRESS: 'Адрес проживания',
}

const props = defineProps<{
    patient: TPatient
}>()

const activeTitle = computed(() => `МЕДИЦИНСКАЯ КАРТА ПАЦИЕНТА №${props.patient?.id}`)
</script>

<template>
    <BlockWrapper :class="$style.PatientCard">
        <div :class="$style.sidebar">
            <h2 :class="$style.title">
                {{ activeTitle }}
            </h2>

            <div :class="$style.avatar">
                <img
                    :key="patient.id"
                    :class="$style.image"
                    :src="patient?.image"
                    :alt="PATIENT_IMAGE_ALT"
                />

                <svg :class="$style.patch">
                    <use :xlink:href="EIcons.heart" />
                </svg>
            </div>

            <div :class="$style.dataBlock">
                <h3 :class="$style.dataTitle">
                    {{ LABELS.NAME }}
                </h3>

                <p :class="$style.dataDescription">
                    {{ patient?.name }}
                </p>
            </div>

            <div :class="$style.dataBlock">
                <h3 :class="$style.dataTitle">
                    {{ LABELS.SEX }}
                </h3>

                <p :class="$style.dataDescription">
                    {{ patient?.sex }}
                </p>
            </div>

            <div :class="$style.dataBlock">
                <h3 :class="$style.dataTitle">
                    {{ LABELS.BIRTH_DATE }}
                </h3>

                <p :class="$style.dataDescription">
                    {{ patient?.birthDate }}
                </p>
            </div>

            <div :class="$style.dataBlock">
                <h3 :class="$style.dataTitle">
                    {{ LABELS.RESIDENTAL_ADDRESS }}
                </h3>

                <p :class="$style.dataDescription">
                    {{ patient?.residentalAddress }}
                </p>
            </div>
        </div>

        <div :class="$style.content">
            <TextBlock v-for="text in patient?.examination" :key="text.id" :data="text" />
        </div>

        <img :class="$style.seal" :src="SEAL_IMAGE" :alt="SEAL_IMAGE_ALT" />
    </BlockWrapper>
</template>

<style lang="scss" module>
.PatientCard {
    position: relative;
    display: flex;
    overflow: hidden;

    @include respond-to(mobile) {
        flex-direction: column;
    }

    @media print {
        flex-direction: row;
    }
}

.sidebar {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-basis: 325px;
    gap: 24px;
    padding: 40px;
    border-right: 2px solid $pink-100;
    background-color: $pink-300;

    @include respond-to(mobile) {
        flex-basis: 100%;
        padding: 24px;
        gap: 20px;
    }

    @media print {
        flex-basis: 325px;
        padding: 40px;
        gap: 24px;
    }
}

.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 36px;
    padding: 40px 40px 40px 24px;

    @include respond-to(mobile) {
        padding: 24px;
        gap: 24px;
    }

    :global {
        ol {
            padding-left: 24px;
            margin: 0;
        }

        p {
            margin-top: 0;
            margin-bottom: 8px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

.title {
    margin: 0;
    color: $dark-0;

    @include text(t2);
}

.avatar {
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    border: 12px solid white;
    background-color: white;
}

.image {
    width: 100%;
    height: 100%;
    color: $dark-0;
}

.patch {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 89px;
    height: 78px;
    transform: translate(35%, 35%);
}

.dataBlock {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.dataTitle {
    margin: 0;
    color: $dark-0;

    @include text(l1);

    @include respond-to(mobile) {
        @include text(l2);
    }
}

.dataDescription {
    margin: 0;
    color: $dark-0;

    @include text(p2);

    @include respond-to(mobile) {
        @include text(p3-b);
    }
}

.seal {
    display: none;
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 200px;
    height: 200px;
    opacity: 0.8;

    @media print {
        display: block;
    }

    @include respond-to(mobile) {
        @media print {
            right: unset;
            left: 35%;
            transform: translateX(-50%);
        }
    }
}
</style>
