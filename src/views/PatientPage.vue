<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import type { TPatient } from '@/@types/patient';

import PATIENTS from '@/assets/ts/patients';

import ActionsBlock from '@/components/patient/ActionsBlock.vue';
import PatientCard from '@/components/patient/PatientCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const route = useRoute();
const router = useRouter();

const activePatientIndex = computed(() => PATIENTS.findIndex(patient => patient.id === route.params.id));
const activePatient = computed(() => PATIENTS[activePatientIndex.value] as TPatient);
const prevPatient = computed(() => PATIENTS[activePatientIndex.value - 1]
    ? PATIENTS[activePatientIndex.value - 1]
    :PATIENTS[PATIENTS.length - 1]
)
const nextPatient = computed(() => PATIENTS[activePatientIndex.value + 1]
    ? PATIENTS[activePatientIndex.value + 1]
    :PATIENTS[0]
)

function onClickNext(){
    router.push({path: `/patients/${nextPatient.value?.id}`});
}

function onClickPrev(){
    router.push({path: `/patients/${prevPatient.value?.id}`});
}
</script>

<template>
    <MainLayout :class="$style.PatientPage">
        <div :class="[$style.container, 'container']">
            <ActionsBlock
                :class="$style.actions"
                @click-next="onClickNext"
                @click-prev="onClickPrev"
            />

            <PatientCard :patient="activePatient"/>
        </div>
    </MainLayout>
</template>

<style lang="scss" module>
.PatientPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include respond-to(mobile) {
        gap: 12px
    }
}

.actions {
    @media print {
        display: none;
    }
}
</style>
