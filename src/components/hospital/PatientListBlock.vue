<script setup lang="ts">
import { RouterLink } from 'vue-router'

import PATIENTS from '@/assets/ts/patients'

import BlockWrapper from '@/components/common/BlockWrapper.vue'

const TITLE = 'СПИСОК ПАЦИЕНТОВ'
</script>

<template>
    <BlockWrapper :class="$style.PatientListBlock">
        <h2 :class="$style.title">
            {{ TITLE }}
        </h2>

        <ul :class="$style.list">
            <li v-for="patient in PATIENTS" :class="$style.item" :key="patient.id">
                <RouterLink :to="`/patients/${patient.id}`" :class="$style.link">
                    {{ patient.name }}&nbsp;&rarr;
                </RouterLink>
            </li>
        </ul>
    </BlockWrapper>
</template>

<style lang="scss" module>
.PatientListBlock {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px;

    @include respond-to(mobile) {
        gap: 8px;
        padding: 24px;
    }
}

.title {
    margin: 0;
    color: $pink-0;

    @include text(t1);

    @include respond-to(mobile) {
        @include text(t2);
    }
}

.list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;

    @include respond-to(mobile) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}

.link {
    display: flex;
    padding: 8px 24px;
    border: 4px solid $pink-100;
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
