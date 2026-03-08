<script setup lang="ts">
import { EIcons } from '@/assets/ts/enums'

const PATIENT_IMAGE_ALT = 'фото пациента'

interface IProps {
    image?: string
    hideIcon?: boolean
}

withDefaults(defineProps<IProps>(), {
    hideIcon: false,
})
</script>

<template>
    <div :class="$style.PatientAvatar">
        <img :class="$style.image" :src="image" :alt="PATIENT_IMAGE_ALT" />

        <svg v-if="!hideIcon" :class="$style.patch">
            <use :xlink:href="EIcons.heart" />
        </svg>
    </div>
</template>

<style lang="scss" module>
.PatientAvatar {
    display: flex;
    position: relative;
    border: var(--avatar-border-size, 12px) solid white;
    background-color: white;
}

.image {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    color: $dark-0;
}

.patch {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 89px;
    height: 78px;
    transform: translate(35%, 35%);
}
</style>
