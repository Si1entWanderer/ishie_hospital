<script setup lang="ts">
import { computed, ref, useCssModule } from 'vue'

import type { TPatient } from '@/@types/patient'
import { EIcons } from '@/assets/ts/enums'

import SEAL_IMAGE from '@/assets/images/seal.png'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import TextBlock from '@/components/common/TextBlock.vue'
import VButton from '@/components/ui/VButton.vue'
import StaffStatus from '@/components/patient/StaffStatus.vue'

const PATIENT_IMAGE_ALT = 'фото пациента'
const SEAL_IMAGE_ALT = 'шуточная печать'

const FIRST_EXAMINATION_LABEL = 'Первичный'

const LABELS = {
    NAME: 'Имя',
    SEX: 'Пол',
    BIRTH_DATE: 'Дата рождения',
    RESIDENTAL_ADDRESS: 'Адрес проживания',
    LAST_EXAMINATION: 'Последний прием',
    OTHER_EXAMINATIONS: 'Прошлые приемы',
}

const $style = useCssModule()

const props = defineProps<{
    patient: TPatient
}>()

const isLastExamination = ref(true)
const examinationIndex = ref(0)

const activeTitle = computed(() => `МЕДИЦИНСКАЯ КАРТА ПАЦИЕНТА №${props.patient?.id}`)

const buttonsClassList = computed(() => ({
    lastExamination: {
        [$style._active]: isLastExamination.value,
    },
    otherExaminations: {
        [$style._active]: !isLastExamination.value,
    },
}))

const lastExaminationIndex = computed(() => (props.patient?.examinations?.length ?? 1) - 1)
const lastExamination = computed(() => props.patient?.examinations?.[lastExaminationIndex.value])

const otherExaminations = computed(() =>
    props.patient?.examinations?.slice(0, lastExaminationIndex.value),
)
const activeOtherExamination = computed(() => props.patient?.examinations?.[examinationIndex.value])

const activeExamination = computed(() =>
    isLastExamination.value ? lastExamination.value : activeOtherExamination.value,
)

function getNumberClassList(index: number) {
    return {
        [$style._active]: examinationIndex.value === index,
    }
}
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

            <StaffStatus
                v-if="patient?.staffName"
                :staff-name="patient.staffName"
            />

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
            <div :class="$style.tabs">
                <button
                    :class="[$style.tab, buttonsClassList.lastExamination]"
                    @click="isLastExamination = true"
                >
                    {{ LABELS.LAST_EXAMINATION }}
                </button>

                <button
                    v-if="otherExaminations?.length"
                    :class="[$style.tab, buttonsClassList.otherExaminations]"
                    @click="isLastExamination = false"
                >
                    {{ LABELS.OTHER_EXAMINATIONS }}
                </button>
            </div>

            <VButton :class="$style.button" @click="isLastExamination = !isLastExamination">
                <Transition name="fade" mode="out-in">
                    <span :key="isLastExamination.toString()">
                        {{
                            isLastExamination ? LABELS.OTHER_EXAMINATIONS : LABELS.LAST_EXAMINATION
                        }}
                    </span>
                </Transition>
            </VButton>

            <div
                :class="$style.examinations"
                v-if="otherExaminations?.length && !isLastExamination"
            >
                <button
                    v-for="(item, index) in otherExaminations"
                    :class="[$style.number, getNumberClassList(index)]"
                    :key="`examination-button-${index}`"
                    @click="examinationIndex = index"
                >
                    {{ index === 0 ? FIRST_EXAMINATION_LABEL : `#${index + 1}` }}
                </button>
            </div>

            <TextBlock v-for="text in activeExamination" :key="text?.id" :data="text" />
        </div>

        <img :class="$style.seal" :src="SEAL_IMAGE" :alt="SEAL_IMAGE_ALT" />
    </BlockWrapper>
</template>

<style lang="scss" module>
.PatientCard {
    position: relative;
    display: flex;
    background-color: $pink-300;

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

    @include respond-to(mobile) {
        flex-basis: 100%;
        gap: 20px;
        padding: 24px;
        border-right: none;
        border-bottom: 2px solid $pink-100;
    }

    @media print {
        flex-basis: 325px;
        padding: 40px;
        gap: 24px;
        border-right: 2px solid $pink-100;
        border-bottom: none;
    }
}

.content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 36px;
    padding: 40px 40px 40px 24px;
    border-radius: 0 46px 46px 0;
    background: white;

    @include respond-to(mobile) {
        gap: 24px;
        padding: 24px;
        border-radius: 0 0 30px 30px;
    }

    @media print {
        gap: 12px;
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

.tabs {
    position: absolute;
    top: 0;
    right: 48px;
    display: flex;
    align-items: flex-end;
    transform: translateY(-100%);

    @include respond-to(mobile) {
        display: none;
    }

    @media print {
        display: none;
    }
}

.tab {
    padding: 8px 24px 4px;
    background-color: $pink-300;
    border: 3px solid $pink-100;
    border-bottom-width: 4px;
    border-radius: 12px 12px 0 0;
    color: $dark-0;
    cursor: pointer;

    @include text(p-4);

    &._active {
        padding-bottom: 8px;
        border-bottom: none;
        background-color: white;
        cursor: default;
    }
}

.button {
    display: none;

    @include respond-to(mobile) {
        display: flex;
    }

    @media print {
        display: none;
    }
}

.examinations {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    @media print {
        display: none;
    }
}

.number {
    padding: 8px 16px;
    border: 3px solid $pink-100;
    border-radius: 12px;
    background-color: white;
    color: $dark-0;
    cursor: pointer;

    &._active {
        background-color: $pink-300;
        cursor: default;
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
