<script setup lang="ts">
import BentoHospitalGreeting from '@/components/hospital/bento/BentoHospitalGreeting.vue'
</script>

<template>
    <div :class="$style.BentoHospitalInfo">
        <BentoHospitalGreeting :class="[$style.bento, $style._wide]" />
    </div>
</template>

<style lang="scss" module>
.BentoHospitalInfo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    @include respond-to(mobile) {
        grid-template-columns: 1fr;
    }
}

.bento {
    min-height: 360px;

    &._wide {
        grid-column: span 2;

        @include respond-to(mobile) {
            grid-column: span 1;
        }
    }
}
</style>
