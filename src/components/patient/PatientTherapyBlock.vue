<script setup lang="ts">
import { computed } from 'vue'

import type { TPatient } from '@/@types/patient'

import { THERAPY_MARKS } from '@/assets/ts/constants'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import PatientAward from '@/components/patient/PatientAward.vue'

const TITLE = 'ОТМЕТКИ О ПРОЙДЕННЫХ ТЕРАПИЯХ'

const props = defineProps<{
    patient: TPatient
}>()

const activeMarks = computed(() =>
    THERAPY_MARKS.filter((item) => props.patient.therapyMarks?.includes(item.id)),
)
</script>

<template>
    <BlockWrapper :class="$style.PatientTherapyBlock">
        <header :class="$style.header">
            {{ TITLE }}
        </header>

        <div :class="$style.body">
            <ul :class="$style.list">
                <li v-for="mark in activeMarks" :class="$style.item" :key="mark.id">
                    <PatientAward :mark="mark" />
                </li>
            </ul>
        </div>
    </BlockWrapper>
</template>

<style lang="scss" module>
.PatientTherapyBlock {
    //
}

.header {
    padding: 24px 40px 20px;
    border-radius: 46px 46px 0 0;
    border-bottom: 2px solid $pink-100;
    background-color: $pink-300;
    color: $dark-0;

    @include text(t2);

    @include respond-to(mobile) {
        padding: 24px;
        border-radius: 30px 30px 0 0;
    }
}

.body {
    padding: 24px 40px 40px;

    @include respond-to(mobile) {
        padding: 24px;
    }
}

.list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 24px;
    margin: 0;
    padding: 0;

    @include respond-to(mobile) {
        flex-direction: column;
        align-items: center;
        gap: 0;
    }
}
</style>
