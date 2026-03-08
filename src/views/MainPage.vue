<script setup lang="ts">
import BentoHospitalInfo from '@/components/hospital/BentoHospitalInfo.vue'
</script>

<template>
    <div :class="$style.MainPage">
        <div :class="[$style.container, 'contianer']">
            <BentoHospitalInfo />
        </div>
    </div>
</template>

<style lang="scss" module>
.MainPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>
