<script setup lang="ts">
import PATIENTS from '@/assets/ts/patients'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import PatientPreviewLink from '@/components/patient/PatientPreviewLink.vue'

const TITLE = 'СПИСОК ПАЦИЕНТОВ'
</script>

<template>
    <BlockWrapper :class="$style.PatientListBlock">
        <h2 :class="$style.title">
            {{ TITLE }}
        </h2>

        <ul :class="$style.list">
            <li v-for="patient in PATIENTS" :class="$style.item" :key="patient.id">
                <PatientPreviewLink :data="patient" size="large" />
            </li>
        </ul>
    </BlockWrapper>
</template>

<style lang="scss" module>
.PatientListBlock {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px 40px;

    @include respond-to(mobile) {
        padding: 24px;
    }
}

.title {
    margin: 0;
    color: $main-0;

    @include text(t1);

    @include respond-to(mobile) {
        @include text(t2);
    }
}

.list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;

    @include respond-to(tablet-s) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    @include respond-to(mobile) {
        grid-template-columns: 1fr;
        gap: 12px;
    }
}

.item {
    min-width: 0;
}

.link {
    display: flex;
    padding: 8px 24px;
    border: 4px solid $main-100;
    border-radius: 24px;
    text-decoration: none;
    color: $dark-0;
    transition: 0.3s transform;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }
}
</style>
