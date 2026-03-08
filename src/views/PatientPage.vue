<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import type { IPatient } from '@/@types/patient'

import PATIENTS from '@/assets/ts/patients'

import ActionsBlock from '@/components/patient/ActionsBlock.vue'
import PatientCard from '@/components/patient/PatientCard.vue'
import PatientTherapyBlock from '@/components/patient/PatientTherapyBlock.vue'

const route = useRoute()
const router = useRouter()

const activePatientIndex = computed(() =>
    PATIENTS.findIndex((patient) => patient.id === route.params.id),
)
const activePatient = computed(() => PATIENTS[activePatientIndex.value] as IPatient)
const prevPatient = computed(() =>
    PATIENTS[activePatientIndex.value - 1]
        ? PATIENTS[activePatientIndex.value - 1]
        : PATIENTS[PATIENTS.length - 1],
)
const nextPatient = computed(() =>
    PATIENTS[activePatientIndex.value + 1] ? PATIENTS[activePatientIndex.value + 1] : PATIENTS[0],
)

function onClickNext() {
    router.push({ path: `/patients/${nextPatient.value?.id}` })
}

function onClickPrev() {
    router.push({ path: `/patients/${prevPatient.value?.id}` })
}

function checkPatientsExistance(newId: string | string[] | undefined) {
    const currentPatient = PATIENTS.find((patient) => patient.id === newId)
    if (!currentPatient) {
        router.push('/')
    }
}

checkPatientsExistance(route.params.id)

watch(
    () => route.params.id,
    (newId) => {
        checkPatientsExistance(newId)
    },
)
</script>

<template>
    <div :class="$style.PatientPage">
        <div :class="[$style.container, 'container']">
            <ActionsBlock
                :class="$style.actions"
                @click-next="onClickNext"
                @click-prev="onClickPrev"
            />

            <Transition name="fade" mode="out-in">
                <PatientCard
                    v-if="activePatient?.id"
                    :class="$style.patientCard"
                    :key="activePatient?.id"
                    :patient="activePatient"
                />
            </Transition>

            <Transition name="fade" mode="out-in">
                <PatientTherapyBlock
                    v-if="activePatient?.therapyMarks?.length"
                    :key="activePatient?.id"
                    :patient="activePatient"
                />
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" module>
.PatientPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.actions {
    @media print {
        display: none;
    }
}

.patientCard {
    margin-top: 36px;

    @include respond-to(mobile) {
        margin-top: 0;
    }
}
</style>
