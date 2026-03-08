<script setup lang="ts">
import { MAINPAGE_BUTTON_TEXT } from '@/assets/ts/constants'

import PatientListBlock from '@/components/hospital/PatientListBlock.vue'
import VButton from '@/components/ui/VButton.vue'
</script>

<template>
    <div :class="$style.PatientsPage">
        <div :class="[$style.container, 'container']">
            <VButton :class="$style.button" tag="router-link" to="/">
                {{ MAINPAGE_BUTTON_TEXT }}
            </VButton>

            <PatientListBlock />
        </div>
    </div>
</template>

<style lang="scss" module>
.PatientsPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.button {
    align-self: flex-start;

    @include respond-to(mobile) {
        width: 100%;
    }
}
</style>
