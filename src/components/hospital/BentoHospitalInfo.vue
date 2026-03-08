<script setup lang="ts">
import {
    ABOUT_BLOCK,
    ABOUT_DOCTOR_BLOCKS,
    LINKS_BLOCK,
} from '@/assets/ts/content/bento-hospital-info'

import BentoLinks from '@/components/common/bento-blocks/BentoLinks.vue'
import BentoTextBlock from '@/components/common/bento-blocks/BentoTextBlock.vue'
import BentoHospitalGreeting from '@/components/hospital/bento-blocks/BentoHospitalGreeting.vue'
import BentoBestPatients from '@/components/patient/bento-blocks/BentoBestPatients.vue'
import BentoLastPatients from '@/components/patient/bento-blocks/BentoLastPatients.vue'
</script>

<template>
    <div :class="$style.BentoHospitalInfo">
        <BentoHospitalGreeting
            :class="[$style.bento, $style['_type-greeting'], $style['_width-wide']]"
        />

        <BentoBestPatients :class="[$style.bento, $style['_type-bestPatients']]" />

        <BentoLastPatients :class="[$style.bento, $style['_type-lastPatients']]" />

        <BentoTextBlock
            :class="[$style.bento, $style['_type-aboutClinic'], $style['_width-wide']]"
            :blocks="[ABOUT_BLOCK]"
        />

        <BentoLinks
            :class="[$style.bento, $style['_type-links'], $style['_width-full']]"
            :links="LINKS_BLOCK"
        />

        <BentoTextBlock
            :class="[$style.bento, $style['_type-aboutDoctor'], $style['_width-full']]"
            :blocks="ABOUT_DOCTOR_BLOCKS"
        />
    </div>
</template>

<style lang="scss" module>
.BentoHospitalInfo {
    --desktop-border-radius: 32px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    @include respond-to(mobile) {
        grid-template-columns: 1fr;
    }
}

.bento {
    grid-column: span 1;
    min-width: 0;

    &._width-wide {
        grid-column: span 2;

        @include respond-to(mobile) {
            grid-column: span 1;
        }
    }

    &._width-full {
        grid-column: span 3;

        @include respond-to(mobile) {
            grid-column: span 1;
        }
    }

    &._type-greeting {
        @include respond-to(mobile) {
            order: 0;
        }
    }

    &._type-bestPatients {
        @include respond-to(mobile) {
            order: 2;
        }
    }

    &._type-lastPatients {
        @include respond-to(mobile) {
            order: 3;
        }
    }

    &._type-aboutClinic {
        @include respond-to(mobile) {
            order: 1;
        }
    }

    &._type-links {
        @include respond-to(mobile) {
            order: 4;
        }
    }

    &._type-aboutDoctor {
        @include respond-to(mobile) {
            order: 5;
        }
    }
}
</style>
