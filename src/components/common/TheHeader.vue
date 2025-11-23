<script setup lang="ts">
import { EIcons } from '@/assets/ts/enums'

import SocialLinks from '@/components/social/SocialLinks.vue'

const CLINIC_NAME = 'РБ(О)У «Клиника имени Иши_j»'
const CLINIC_TITLE = 'Рофельное бюджетное(очень) учреждение «Клиника имени Иши_j»'
const CLINIC_DESCRIPTION = 'Лечебное профилактическое учреждение'
</script>

<template>
    <div :class="$style.TheHeader">
        <div :class="[$style.container, 'container']">
            <div :class="$style.heading">
                <svg :class="$style.logo">
                    <use :xlink:href="EIcons.logo" />
                </svg>

                <div :class="$style.clinic">
                    <h1 :class="$style.clinicName" :title="CLINIC_TITLE">
                        {{ CLINIC_NAME }}
                    </h1>

                    <p :class="$style.clinicDescription">
                        {{ CLINIC_DESCRIPTION }}
                    </p>
                </div>
            </div>

            <SocialLinks :class="$style.socials" />
        </div>
    </div>
</template>

<style lang="scss" module>
.TheHeader {
    padding: 12px 0;
    border-bottom: 4px solid $pink-100;
    background: white;
}

.logo {
    height: 40px;
    width: 40px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include respond-to(mobile) {
        justify-content: flex-start;
    }
}

.heading {
    display: flex;
    gap: 12px;
}

.clinic {
    display: flex;
    flex-direction: column;
}

.clinicName {
    margin: 0;
    color: $dark-0;
    cursor: help;

    @include text(h1);
}

.clinicDescription {
    margin: 0;
    color: $dark-0;
    cursor: default;

    @include text(h2);
}

.socials {
    @include respond-to(mobile) {
        display: none;
    }
}
</style>
