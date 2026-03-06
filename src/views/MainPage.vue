<script setup lang="ts">
import BentoHospitalInfo from '@/components/hospital/BentoHospitalInfo.vue'
import FaqBlock from '@/components/hospital/FaqBlock.vue'
import PatientListBlock from '@/components/hospital/PatientListBlock.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout :class="$style.MainPage">
        <div :class="[$style.container, 'contianer']">
            <BentoHospitalInfo />
            <PatientListBlock />

            <FaqBlock />
        </div>
    </MainLayout>
</template>

<style lang="scss" module>
.MainPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include respond-to(mobile) {
        gap: 12px;
    }
}
</style>
