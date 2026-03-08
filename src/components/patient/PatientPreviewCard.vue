<script setup lang="ts">
import type { IPatient } from '@/@types/patient'
import PatientAvatar from '@/components/patient/PatientAvatar.vue'

const NAME_LABEL = 'Имя'
const TOKENS_COUNT_LABEL = 'Пройдено терапий'

interface IProps {
    data?: IPatient
}
defineProps<IProps>()
</script>

<template>
    <div :class="$style.PatientPreviewCard">
        <PatientAvatar :class="$style.avatar" :image="data?.image" hide-icon />

        <dl :class="$style.row">
            <dt :class="$style.label" v-html="NAME_LABEL" />

            <dd :class="$style.text" v-html="data?.name" />
        </dl>

        <dl :class="$style.row">
            <dt :class="$style.label" v-html="TOKENS_COUNT_LABEL" />

            <dd :class="$style.text">
                {{ data?.therapyMarks?.length }}
            </dd>
        </dl>
    </div>
</template>

<style lang="scss" module>
.PatientPreviewCard {
    display: inline-flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    border-radius: 24px;
    background-color: $main-300;
    transition: 0.3s box-shadow;

    &:hover {
        box-shadow: inset 0 0 0 4px $main-200;
    }
}

.avatar {
    --avatar-border-size: 12px;
    width: 164px;
}

.row {
    margin: 0;
}

.label {
    color: $dark-0;

    @include text(l3);
}

.text {
    margin-left: 0;
    color: $dark-0;

    @include text(p3-b);
}
</style>
