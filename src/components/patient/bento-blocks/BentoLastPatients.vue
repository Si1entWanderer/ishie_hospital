<script setup lang="ts">
import patients from '@/assets/ts/patients'
import BlockWrapper from '@/components/common/BlockWrapper.vue'
import PatientPreviewLink from '@/components/patient/PatientPreviewLink.vue'

const BLOCK_TITLE = 'Последние пациенты'
const PATIENTS_COUNT = 3

const lastPatients = patients.slice(PATIENTS_COUNT * -1)
</script>

<template>
    <BlockWrapper :class="$style.BentoLastPatients" :title="BLOCK_TITLE">
        <div :class="$style.content">
            <PatientPreviewLink v-for="patient in lastPatients" :key="patient.id" :data="patient" />
        </div>
    </BlockWrapper>
</template>

<style lang="scss" module>
.BentoLastPatients {
    --desktop-border-radius: 32px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
}
</style>
