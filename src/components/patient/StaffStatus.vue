<script setup lang="ts">
import { EIcons } from '@/assets/ts/enums'

const DEFAULT_STAFF_NAME = 'Дежурный врач'
const LABEL = 'медперсонал'

withDefaults(
    defineProps<{
        staffName?: string
    }>(),
    {
        staffName: DEFAULT_STAFF_NAME,
    },
)
</script>

<template>
    <div :class="$style.StaffStatus">
        <div :class="$style.content">
            <p :class="$style.label" v-html="LABEL" />

            <p :class="$style.name" v-html="staffName" />
        </div>

        <svg :class="$style.icon">
            <use :xlink:href="EIcons.medicalCross" />
        </svg>
    </div>
</template>

<style lang="scss" module>
.StaffStatus {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: $pink-0;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.label {
    margin: 0;
    color: white;

    @include text(l3);
}

.name {
    margin: 0;
    color: white;

    @include text(p3-b);
}

.icon {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    color: white;
}
</style>
