<script setup lang="ts">
import { ref } from 'vue'
import { EIcons } from '@/assets/ts/enums'
import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'

const PATIENT_IMAGE_ALT = 'фото пациента'

interface IProps {
    image?: string
    hideIcon?: boolean
}

withDefaults(defineProps<IProps>(), {
    hideIcon: false,
})

const isLoading = ref(true)
</script>

<template>
    <div :class="$style.PatientAvatar">
        <Transition name="fade" mode="out-in">
            <img
                v-if="image"
                :class="$style.image"
                :src="image"
                :alt="PATIENT_IMAGE_ALT"
                @load="isLoading = false"
            />
            <img
                v-else
                :class="$style.image"
                :src="placeholderAvatar"
                :alt="PATIENT_IMAGE_ALT"
                @load="isLoading = false"
            />
        </Transition>

        <Transition name="fade">
            <div v-if="isLoading" :class="$style.skeleton" />
        </Transition>

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

.skeleton {
    position: absolute;
    left: 0;
    top: 0;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    background-color: $light-300;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
        animation: shimmer 1.25s infinite linear;
    }
}

.patch {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 89px;
    height: 78px;
    z-index: 2;
    transform: translate(35%, 35%);
}

@keyframes shimmer {
    to {
        left: 100%;
    }
}
</style>
